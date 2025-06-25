# 🚀 Formulario de Desarrollo MVP

Un formulario web profesional para recopilar información de clientes que desean desarrollar aplicaciones web o móviles. Integrado con **FormEasy** para recibir notificaciones por email automáticamente.

## ✨ Características

- **Formulario Completo**: Recopila toda la información necesaria para crear un MVP
- **Diseño Responsive**: Funciona perfectamente en desktop y móvil
- **Integración con FormEasy**: Recibe los datos directamente en tu email
- **Interfaz Moderna**: Diseño atractivo con animaciones suaves
- **Fácil Despliegue**: Compatible con GitHub Pages

## 🛠️ Configuración Paso a Paso

### 1. Configurar FormEasy (Google Apps Script)

#### Paso 1.1: Crear Google Sheet
1. Ve a [Google Sheets](https://sheets.google.com)
2. Crea una nueva hoja de cálculo
3. Nómbrala como "Formulario MVP" o el nombre que prefieras

#### Paso 1.2: Configurar Apps Script
1. En tu Google Sheet, ve a **Extensiones > Apps Script**
2. Borra el código predeterminado
3. Pega el siguiente código:

```javascript
function doPost(req) {
  FormEasy.setEmail('tu-email@gmail.com'); // Reemplaza con tu email
  FormEasy.setSubject('Nuevo Proyecto MVP'); // Opcional
  FormEasy.setFormHeading('Solicitud de Desarrollo MVP'); // Opcional
  FormEasy.setFields('name', 'email', 'message'); // Campos estándar
  return FormEasy.action(req);
}
```

#### Paso 1.3: Agregar la Librería FormEasy
1. En Apps Script, haz clic en el **+** junto a "Librerías"
2. Pega este Script ID: `1CAyzGbXdwMlko81SbJAjRp7ewxhyGKhDipDK4v8ZvlpYqrMAAzbFNccL`
3. Haz clic en "Buscar"
4. Selecciona la versión más reciente
5. Cambia el identificador a `FormEasy`
6. Haz clic en "Guardar"

#### Paso 1.4: Desplegar como Web App
1. Haz clic en **Implementar > Nueva implementación**
2. Selecciona tipo: **Aplicación web**
3. Configuración:
   - **Ejecutar como**: Yo (tu email)
   - **Quién puede acceder**: Cualquier persona
4. Haz clic en **Implementar**
5. **Autoriza** el script cuando se te solicite
6. **Copia la URL** que aparece (la necesitarás después)

### 2. Configurar el Formulario HTML

#### Paso 2.1: Actualizar el Endpoint
1. Abre el archivo `mvp_form.html`
2. Busca la línea que dice:
   ```javascript
   const FORM_ENDPOINT = 'https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec';
   ```
3. Reemplaza `YOUR_DEPLOYMENT_ID` con el ID de tu despliegue de Apps Script

#### Paso 2.2: Personalizar (Opcional)
- Cambia el email en Apps Script por el tuyo
- Modifica el asunto del email si deseas
- Personaliza los colores o texto del formulario

### 3. Desplegar en GitHub Pages

#### Paso 3.1: Crear Repositorio
1. Ve a [GitHub](https://github.com)
2. Crea un nuevo repositorio
3. Nómbralo como `formulario-mvp` o el nombre que prefieras
4. Márcalo como **público**

#### Paso 3.2: Subir Archivos
1. Sube los archivos `mvp_form.html` y `README.md`
2. Opcionalmente, renombra `mvp_form.html` a `index.html` para que sea la página principal

#### Paso 3.3: Activar GitHub Pages
1. Ve a **Settings** de tu repositorio
2. Scroll hacia abajo hasta **Pages**
3. En **Source**, selecciona **Deploy from a branch**
4. Selecciona la rama **main** y folder **/ (root)**
5. Haz clic en **Save**

¡Tu formulario estará disponible en: `https://tuusuario.github.io/nombre-del-repo`

## 📋 Uso del Formulario

### Información que Recopila:
- **Cliente**: Nombre, email, teléfono, empresa
- **Proyecto**: Nombre, descripción, audiencia objetivo
- **Plataforma**: Web, móvil, o ambas
- **Funcionalidades**: Lista completa de características
- **Diseño**: Estilo, colores, referencias
- **Aspectos Técnicos**: Usuarios, integraciones, hosting
- **Cronograma**: Timeline, presupuesto, modelo de pago
- **Soporte**: Mantenimiento, nivel de soporte

### Cómo Funciona:
1. El cliente llena el formulario
2. Los datos se envían a FormEasy
3. Recibes un email con toda la información estructurada
4. Los datos también se guardan en tu Google Sheet

## 🔧 Personalización Avanzada

### Agregar Campos Personalizados
Para agregar campos adicionales, modifica tanto el HTML como el Apps Script:

1. **En el HTML**: Agrega los nuevos campos al formulario
2. **En Apps Script**: Actualiza los campos en `setFields()`

### Configurar reCAPTCHA (Opcional)
Para evitar spam, puedes agregar reCAPTCHA:

```javascript
function doPost(req) {
  FormEasy.setEmail('tu-email@gmail.com');
  FormEasy.setRecaptcha('TU_SECRET_KEY'); // Agregar esta línea
  return FormEasy.action(req);
}
```

### Personalizar Email
```javascript
function doPost(req) {
  FormEasy.setEmail('tu-email@gmail.com');
  FormEasy.setSubject('🚀 Nuevo Proyecto MVP');
  FormEasy.setFormHeading('Solicitud de Desarrollo');
  return FormEasy.action(req);
}
```

## 🚨 Solución de Problemas

### Error: "Failed to fetch"
- Verifica que la URL del endpoint sea correcta
- Asegúrate de que el Apps Script esté desplegado correctamente
- Revisa que el acceso esté configurado como "Cualquier persona"

### No Recibo Emails
- Verifica que el email en Apps Script sea correcto
- Revisa la carpeta de spam
- Asegúrate de que FormEasy esté configurado correctamente

### Error en GitHub Pages
- Verifica que el repositorio sea público
- Asegúrate de que el archivo se llame `index.html` para la página principal
- Revisa que GitHub Pages esté activado en la configuración

## 📞 Soporte

Si tienes problemas con la configuración:
1. Revisa la [documentación de FormEasy](https://github.com/Basharath/FormEasy)
2. Verifica que todos los pasos estén completados correctamente
3. Revisa la consola del navegador para errores JavaScript

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Puedes usarlo libremente para proyectos personales o comerciales.

---

**¡Listo para recibir proyectos MVP! 🎉** 