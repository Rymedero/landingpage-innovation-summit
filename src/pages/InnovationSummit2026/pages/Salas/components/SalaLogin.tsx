import { useState } from "react";
import { createPortal } from "react-dom";

export interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
}

export function LoginModal({ isOpen, onClose, onSuccess }: LoginModalProps) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    if (!isOpen) return null;

    const handleLogin = () => {
        // Leer las credenciales desde variables de entorno
        const ENV_USER = import.meta.env.VITE_SALAS_USER;
        const ENV_PASS = import.meta.env.VITE_SALAS_PASSWORD;

        // Validar usuario y contraseña
        if (username === ENV_USER && password === ENV_PASS) {
            sessionStorage.setItem("auth", "true");
            setError(""); // limpiar error
            onSuccess();
            onClose();
        } else {
            setError("Usuario o contraseña incorrectos"); // ⚠ Mostrar error
        }
    };

    // Función para cerrar limpiando estados
    const handleClose = () => {
        setError("");
        onClose();
    };

    return createPortal(
        /* ✅ OVERLAY: Recuperamos 'bg-black/70' y 'backdrop-blur-sm' del primer código */
        <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">

            {/* ✅ TARJETA: Mantenemos el diseño Azul Oscuro (Summit style) */}
            <div
                className="bg-blue-950 border border-white/10 rounded-2xl p-8 w-full max-w-[350px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-in fade-in zoom-in duration-200"
                onClick={(e) => e.stopPropagation()} // Evita cerrar al hacer clic dentro
            >
                {/* Título: Blanco/Amarillo */}
                <h2 className="text-2xl font-black mb-6 text-center tracking-tight text-white">
                    ENTRADA A <span className="text-yellow-400">SALAS</span>
                </h2>

                <div className="space-y-4">
                    {/* Inputs: Fondo azul más claro, texto blanco */}
                    <input
                        type="text"
                        placeholder="Usuario"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-3 bg-blue-900/50 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all"
                    />

                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 bg-blue-900/50 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all"
                    />

                    {/* Mensaje de error (Rojo suave sobre oscuro) */}
                    {error && (
                        <p className="text-red-400 text-xs font-bold text-center uppercase tracking-widest animate-pulse">
                            {error}
                        </p>
                    )}

                    {/* Botón: Amarillo con letras negras para máximo contraste */}
                    <button
                        className="w-full bg-yellow-400 text-blue-950 py-3 rounded-xl font-black hover:bg-yellow-300 active:scale-[0.98] transition-all shadow-lg shadow-yellow-400/20 uppercase tracking-tighter"
                        onClick={handleLogin}
                    >
                        ENTRAR AHORA
                    </button>

                    {/* Botón secundario (Texto tenue) */}
                    <button
                        className="w-full text-sm text-white/50 hover:text-white font-medium transition-colors"
                        onClick={handleClose}
                    >
                        Volver al inicio
                    </button>
                </div>
            </div>
        </div>,
        document.body // Destino del portal
    );
}