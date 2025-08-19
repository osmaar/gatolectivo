![Gatolectivo](src/assets/images/logo_letras_gatolectivo.png)

Gatolectivo es una plataforma de apoyo a animales comunitarios y en situación de riesgo, especializada en el cuidado y rescate de colonias felinas ferales en la Ciudad de México. Nace en enero de 2017 con el propósito de documentar y respaldar la labor de procuración de una colonia felina feral cerca de la colonia El Rosario, en la alcaldía Azcapotzalco.

## 🐱 Sobre Gatolectivo

Gatolectivo es una organización comprometida con el bienestar animal que se dedica a:

- **Rescate y cuidado** de colonias felinas ferales
- **Protocolo TNR** (Atrapa, Esteriliza, Libera)
- **Adopciones responsables** con seguimiento personalizado
- **Educación** sobre tenencia responsable de mascotas
- **Red de hogares temporales** para animales rescatados
- **Apoyo veterinario** y atención médica preventiva

### 🏆 Nuestros Logros (2017-2023)

- Apoyo a colonias felinas en alcaldías: Coyoacán, Cuauhtémoc, Benito Juárez, Iztacalco e Iztapalapa
- Seguimiento a cerca de **300 solicitudes de adopción**
- Creación del **Proyecto Santuario Michican** para gatos ferales gerontes
- Participación en eventos como: FestiKat, MiauFest, Bazar La Veganería, entre otros
- Red activa de hogares temporales con **44 animales en resguardo** (2023)

## 🛠️ Tecnologías Utilizadas

Este sitio web está construido con tecnologías modernas para garantizar una experiencia rápida y accesible:

- **Astro**: Framework principal para sitios web rápidos y centrados en contenido
- **TailwindCSS**: Framework CSS utilitario para desarrollo ágil de interfaces
- **Alpine.js**: Framework JavaScript ligero para interactividad
- **MDX**: Para contenido enriquecido con componentes
- **WordPress Headless**: CMS backend para gestión autoadministrable de contenido

## 🔄 Arquitectura Headless

Este proyecto implementa una arquitectura **Headless CMS** donde:

- **Frontend**: Astro genera un sitio estático rápido y optimizado
- **Backend**: WordPress proporciona una interfaz administrativa familiar y autoadministrable
- **API**: Conexión entre Astro y WordPress para contenido dinámico
- **Beneficios**:
  - Gestión de contenido fácil para el equipo de Gatolectivo
  - Rendimiento superior del sitio web
  - Flexibilidad para futuras integraciones
  - Actualizaciones de contenido sin conocimientos técnicos

## 🚀 Instalación y Desarrollo

Para ejecutar este proyecto localmente:

1. **Clonar el repositorio**:
   ```sh
   git clone https://github.com/tu-usuario/gatolectivo.git
   cd gatolectivo
   ```

2. **Instalar dependencias**:
   ```sh
   npm install
   ```

3. **Ejecutar servidor de desarrollo**:
   ```sh
   npm run dev
   ```

4. **Compilar para producción**:
   ```sh
   npm run build
   ```

## 📂 Estructura del Proyecto

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── images/
│   │       └── logo_letras_gatolectivo.png
│   ├── components/
│   ├── data/
│   │   └── names.json
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── nosotros.astro
│   │   ├── adopciones/
│   │   ├── blog/
│   │   ├── contacto.astro
│   │   └── politica-privacidad.astro
│   └── styles/
└── package.json
```

## 📄 Páginas Disponibles

- **Inicio**: Presentación de la organización y llamadas a la acción
- **Nosotros**: Historia, misión, visión y valores de Gatolectivo
- **Adopciones**: Catálogo de animales disponibles para adopción
- **Blog**: Artículos sobre cuidado animal y noticias de la organización
- **Contacto**: Formularios de contacto y información de ubicación
- **Política de Privacidad**: Cumplimiento con la Ley Federal de Protección de Datos Personales

## 🧩 Componentes Disponibles

- **GeneradorNombres**: Generador de nombres mexicanos para mascotas
- **FormularioAdopcion**: Formulario completo para solicitudes de adopción
- **TarjetaAnimal**: Componente para mostrar animales disponibles
- **Mapa**: Integración con mapas para mostrar ubicaciones
- **RedesSociales**: Enlaces a redes sociales oficiales
- **HorarioAtencion**: Tabla de horarios de atención
- **WideImage**: Componente para imágenes de ancho completo

*Nota: Muchos de estos componentes están adaptados del template original Pawstronaut.*

## 🤝 Protocolo de Adopción Responsable

Nuestro proceso de adopción sigue los lineamientos de la Ley de Protección Animal de la CDMX:

1. **Publicación** de animales disponibles
2. **Entrevista** con candidatos
3. **Solicitud formal** de adopción
4. **Verificación** de domicilio
5. **Periodo de prueba** (7-21 días)
6. **Seguimiento** post-adopción

## 📞 Contacto

- **Sitio web**: [gatolectivo.org](https://gatolectivo.org/)
- **Email**: contacto@gatolectivo.org
- **Redes sociales**: Facebook y Twitter oficiales

## 🤝 Cómo Ayudar

Gatolectivo invita a personas interesadas en procurar comunidades felinas ferales a unirse como:

- **Hogares temporales**
- **Voluntarios** en eventos y actividades
- **Donantes** para gastos médicos y alimentación
- **Profesionales** veterinarios y técnicos
- **Promotores** de adopciones responsables

## 🙏 Créditos

Este sitio web está basado en el template **Pawstronaut**, un tema gratuito para Astro diseñado específicamente para refugios de animales.

- **Template original**: [Pawstronaut](https://github.com/wpinfusion/pawstronaut)
- **Creado por**: WP Infusion
- **Contacto del template**: info@wpinfusion.com

Agradecemos al equipo de WP Infusion por crear este excelente punto de partida que hemos adaptado para las necesidades específicas de Gatolectivo.

## 📝 Licencia

Este proyecto está desarrollado para apoyar la labor de Gatolectivo, una organización sin fines de lucro dedicada al bienestar animal en la Ciudad de México.

---

*Colaborando con instituciones, organizaciones independientes y la sociedad en general para atender colonias de gatos ferales, evitando su sobrepoblación y mejorando la calidad y esperanza de vida de la población felina.*