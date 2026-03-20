import { useState } from "react";

const REGISTRO_URL = "http://127.0.0.1:8000/registro";

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
        let backendMessage = "";

        try {
          const json = await response.json();
          if (typeof json?.detail === "string") {
            backendMessage = json.detail;
          } else {
            backendMessage = JSON.stringify(json);
          }
        } catch {
          const text = await response.text();
          backendMessage = text || "Sin detalle en la respuesta";
        }

        throw new Error(
          `Error ${response.status} al registrar. Detalle backend: ${backendMessage}`,
        );
      }

      return true;
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "No se pudo enviar el registro. Verifica el backend e intenta nuevamente.";
      setErrorMessage(
        message,
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
