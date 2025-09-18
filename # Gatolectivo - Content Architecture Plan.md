# Gatolectivo - Content Architecture Plan

This document outlines the content structure for the Gatolectivo website, separating Global Settings, core Content Entities, and modular Page Builder Blocks.

- **Technical Names** (slugs, field names): English
- **User-facing Labels** (in WordPress Admin): Spanish

---

## 1. Global Site Settings

> These are managed via a single **ACF Options Page** for sitewide consistency.

- **ACF Options Page Name:** `Site Settings`
- **User-facing Label:** `Ajustes del Sitio`

### Header Settings
- **User Label:** `Ajustes de la Cabecera`
- **Fields:**
    - `site_logo` (Image)
    - `site_title` (Text) - *Example: "Gatolectivo"*
    - `site_slogan` (Text) - *Example: "¡Maullidos de la ciudad!"*

### Footer Settings
- **User Label:** `Ajustes del Pie de Página`
- **Fields:**
    - `copyright_text` (Text) - *Example: "Gatolectivo. Todos los derechos reservados." (The year will be added dynamically in Astro).*
    - `privacy_policy_link` (Page Link) - *To link to your Privacy Policy page.*
    - `facebook_url` (URL)
    - `instagram_url` (URL)
    - `youtube_url` (URL)

### Navigation Menu
> Managed via the native WordPress menu builder (**Appearance > Menus**). Requires registering a menu location in `functions.php`: `register_nav_menu('primary_menu', 'Primary Header Menu');`

---

## 2. Content Entities (Base CPTs)

These are the core data types of the site. They are not page blocks themselves but are used *by* the blocks.

### Pet
- **CPT Name:** `pet`
- **User Label:** `Mascotas`
- **Purpose:** Holds all information for an individual pet available for adoption.
- **ACF Fields:** `name`, `photos` (Gallery), `description`, `age`, `breed`, `gender`, `is_child_friendly` (True/False), etc.

### Team Member
- **CPT Name:** `team_member`
- **User Label:** `Miembros del Equipo`
- **Purpose:** Holds info for a single team member.
- **ACF Fields:** `name`, `role`, `avatar` (Image).

### FAQ Item
- **CPT Name:** `faq_item`
- **User Label:** `Preguntas Frecuentes`
- **Purpose:** A single question-answer pair.
- **ACF Fields:** `question` (Text), `answer` (Text Area).

### Post (WordPress Default)
- Used for the blog.

---

## 3. Page Builder Blocks (Modular CPTs)

These are the reusable "Lego" pieces for building pages.

### Block: Hero
- **CPT Name:** `block_hero`
- **User Label:** `Bloque: Hero`
- **Purpose:** The main banner for the top of a page.
- **ACF Fields:**
    - `background_image` (Image)
    - `headline` (Text)
    - `content` (Text Area)
    - `show_button` (True / False)
    - `button_text` (Text) - *Conditional on `show_button`*
    - `button_url` (Link) - *Conditional on `show_button`*

### Block: Text with Image
- **CPT Name:** `block_text_image`
- **User Label:** `Bloque: Texto con Imagen`
- **Purpose:** A flexible two-column section with text and an image.
- **ACF Fields:**
    - `headline` (Text)
    - `content` (WYSIWYG Editor)
    - `image` (Image)
    - `image_position` (Select) - Options: `left`, `right`.
    - `show_button` (True / False)
    - `button_text` (Text) - *Conditional*
    - `button_url` (Link) - *Conditional*

### Block: Featured Pets
- **CPT Name:** `block_featured_pets`
- **User Label:** `Bloque: Mascotas Destacadas`
- **Purpose:** To display a curated selection of pets.
- **ACF Fields:**
    - `headline` (Text)
    - `intro_content` (Text Area)
    - `featured_pets` (Relationship) - *Links to the `pet` CPT.*

### Block: Latest Posts
- **CPT Name:** `block_latest_posts`
- **User Label:** `Bloque: Últimas Noticias`
- **Purpose:** To show a preview of recent blog posts.
- **ACF Fields:**
    - `headline` (Text)
    - `intro_content` (Text Area)
    - `post_count` (Number) - *Default: 3*

### Block: Team Grid
- **CPT Name:** `block_team_grid`
- **User Label:** `Bloque: Grid de Equipo`
- **Purpose:** To present team members.
- **ACF Fields:**
    - `headline` (Text)
    - `intro_content` (Text Area)
    - `team_members` (Relationship) - *Links to the `team_member` CPT.*

### Block: Article
- **CPT Name:** `block_article`
- **User Label:** `Bloque: Artículo`
- **Purpose:** For long-form, structured text sections.
- **ACF Fields:**
    - `content` (WYSIWYG Editor)

### Block: FAQ List
- **CPT Name:** `block_faq_list`
- **User Label:** `Bloque: Lista de FAQ`
- **Purpose:** To display a list of FAQs.
- **ACF Fields:**
    - `headline` (Text)
    - `faq_items` (Relationship) - *Links to the `faq_item` CPT.*

### Block: Call to Action (CTA)
- **CPT Name:** `block_cta`
- **User Label:** `Bloque: Llamada a la Acción`
- **Purpose:** A banner to drive a specific user action.
- **ACF Fields:**
    - `background_image` (Image) - *Optional*
    - `headline` (Text)
    - `button_text` (Text)
    - `button_url` (Link)

### Block: Contact Info
- **CPT Name:** `block_contact_info`
- **User Label:** `Bloque: Info de Contacto`
- **Purpose:** To display address, hours, and map on the contact page.
- **ACF Fields:**
    - `headline` (Text)
    - `address` (Text Area)
    - `hours_table` (WYSIWYG Editor)
    - `map_embed_code` (Text Area)

---

## 4. Template Pages (Not Built with Blocks)

> These Astro pages have a fixed layout and dynamically pull in collections of content. They do not use the page builder system.

- **Adoption Page (Pet Listing):** Fetches ALL `pet` CPTs and displays them in a grid with filters. The page's main headline/intro can be pulled from a standard WordPress Page named "Adopta".
- **Single Pet Page:** A template that displays the data for one specific `pet`.
- **Blog Page (Post Listing):** Fetches ALL `post` CPTs.
- **Single Post Page:** A template that displays one specific `post`.