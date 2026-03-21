import { useState } from "react";

const REGISTRO_URL = "https://idea-venezuela-frcxete6guc9c8fy.canadacentral-01.azurewebsites.net/registro";

export type GiftIdeaRegistrationPayload = {
  nombre: string;
  apellido: string;
  correoElectronico: string;
  sector: string;
  ideas: string;
  visionVocacionPais: string;
};

type UseGiftIdeaRegistrationReturn = {
  isSubmitting: boolean;
  errorMessage: string | null;
  submitRegistration: (payload: GiftIdeaRegistrationPayload) => Promise<boolean>;
};

type BackendValidationErrorItem = {
  loc?: unknown;
  msg?: string;
  type?: string;
  ctx?: {
    limit_value?: number;
  };
};

const FIELD_LABELS: Record<string, string> = {
  nombre: "Nombre",
  apellido: "Apellido",
  correoElectronico: "Correo electrónico",
  sector: "Sector",
  ideas: "Ideas",
  visionVocacionPais: "Visión o vocación del país",
};

function parseJsonSafe(rawText: string): unknown {
  try {
    return JSON.parse(rawText);
  } catch {
    return null;
  }
}

function translateValidationMessage(rawMsg: string, fieldLabel: string): string {
  const minCharsMatch = rawMsg.match(/at least\s+(\d+)\s+characters?/i);
  if (minCharsMatch) {
    return `${fieldLabel}: debe tener al menos ${minCharsMatch[1]} caracteres.`;
  }

  if (/field required/i.test(rawMsg)) {
    return `${fieldLabel}: es obligatorio.`;
  }

  if (/value is not a valid email address/i.test(rawMsg)) {
    return `${fieldLabel}: correo electrónico inválido.`;
  }

  if (/string type expected/i.test(rawMsg)) {
    return `${fieldLabel}: formato inválido.`;
  }

  return `${fieldLabel}: valor inválido.`;
}

function build422FriendlyMessage(body: unknown): string | null {
  if (!body || typeof body !== "object") {
    return null;
  }

  const detail = (body as { detail?: unknown }).detail;
  if (!Array.isArray(detail)) {
    if (typeof detail === "string") {
      return "Revisa la información ingresada. " + detail;
    }
    return null;
  }

  const fieldMessages = detail
    .map((item) => {
      const error = item as BackendValidationErrorItem;
      const loc = Array.isArray(error.loc) ? error.loc : [];
      const fieldKey = typeof loc[loc.length - 1] === "string" ? String(loc[loc.length - 1]) : "";
      const fieldLabel = FIELD_LABELS[fieldKey] ?? "Campo";

      const rawMsg = typeof error.msg === "string" ? error.msg : "Valor inválido.";
      const limit = error.ctx?.limit_value;

      if (/at least|ensure this value has at least/i.test(rawMsg) && typeof limit === "number") {
        return `${fieldLabel}: debe tener al menos ${limit} caracteres.`;
      }

      if (/field required/i.test(rawMsg)) {
        return `${fieldLabel}: es obligatorio.`;
      }

      if (/[a-z]/i.test(rawMsg) && /\b(string|field|value|characters|email|expected|valid)\b/i.test(rawMsg)) {
        return translateValidationMessage(rawMsg, fieldLabel);
      }

      return `${fieldLabel}: ${rawMsg}.`;
    })
    .slice(0, 3);

  if (fieldMessages.length === 0) {
    return null;
  }

  return `Por favor corrige los siguientes campos: ${fieldMessages.join(" ")}`;
}

function buildUserFriendlyError(status: number, body: unknown): string {
  if (status === 422) {
    return (
      build422FriendlyMessage(body) ||
      "Algunos campos del formulario no son válidos. Revisa e inténtalo de nuevo."
    );
  }

  if (status >= 500) {
    return "Tuvimos un problema en el servicio. Intenta nuevamente en unos minutos.";
  }

  return "No se pudo enviar el registro en este momento. Inténtalo nuevamente.";
}

export function useGiftIdeaRegistration(): UseGiftIdeaRegistrationReturn {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const submitRegistration = async (
    payload: GiftIdeaRegistrationPayload,
  ): Promise<boolean> => {
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch(REGISTRO_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const rawBody = await response.text();
        const parsedBody = parseJsonSafe(rawBody);

        console.error("[GiftIdeaVzla] Error al registrar", {
          status: response.status,
          responseBody: parsedBody,
          responseBodyRaw: rawBody,
          payload,
        });

        setErrorMessage(buildUserFriendlyError(response.status, parsedBody));
        return false;
      }

      return true;
    } catch (error) {
      console.error("[GiftIdeaVzla] Fallo de red o excepción inesperada", {
        error,
        payload,
      });

      setErrorMessage(
        "No pudimos conectar con el servicio. Verifica tu conexión e inténtalo nuevamente.",
      );
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    errorMessage,
    submitRegistration,
  };
}
