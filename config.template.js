// Archivo template para configuración
// Este archivo será procesado por GitHub Actions
const CONFIG = {
    FORM_ENDPOINT: '{{FORM_ENDPOINT_SECRET}}',
    RECAPTCHA_SITE_KEY: '{{RECAPTCHA_SITE_KEY}}' // Para uso futuro
};

// Hacer disponible globalmente
window.CONFIG = CONFIG; 