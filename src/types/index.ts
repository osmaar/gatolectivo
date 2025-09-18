import { z } from 'astro:content';

// Esquema para un objeto de imagen simple (reutilizable)
const imageSchema = z.object({
  url: z.string(),
  width: z.number(),
  height: z.number(),
  alt: z.string().optional().nullable(),
});

// Esquema para la imagen SEO con todos sus tamaños
const seoImageSchema = z
  .object({
    thumbnail: imageSchema.optional().nullable(),
    medium: imageSchema.optional().nullable(),
    medium_large: imageSchema.optional().nullable(),
    large: imageSchema.optional().nullable(),
    full: imageSchema.optional().nullable(),
  })
  .nullable();

// Esquema para nuestro nuevo objeto de metadatos SEO
const SeoMetaSchema = z.object({
  title: z.string(),
  description: z.string().optional().nullable(),
  image: seoImageSchema,
});

// Esquema para un objeto de imagen con todos sus tamaños (reutilizable)
const imageSizesSchema = z
  .object({
    thumbnail: imageSchema.optional().nullable(),
    medium: imageSchema.optional().nullable(),
    medium_large: imageSchema.optional().nullable(),
    large: imageSchema.optional().nullable(),
    full: imageSchema.optional().nullable(),
    'pet-card-thumbnail': imageSchema.optional().nullable(),
  })
  .nullable();

// --- Esquemas para los Datos de cada Bloque ---

// Esquema para los datos específicos del Bloque Hero
const BlockHeroDataSchema = z.object({
  background_image: imageSchema.nullable(),
  headline: z.string(),
  content: z.string(),
  show_button: z.boolean(),
  text_button: z.string().optional().nullable(),
  url_button: z
    .object({
      title: z.string(),
      url: z.string(),
      target: z.string().optional().nullable(),
    })
    .optional()
    .nullable(),
});

// Esquema para los datos del bloque Texto con Imagen
const BlockTextImageDataSchema = z.object({
  headline: z.string(),
  content: z.string(),
  image: imageSchema.nullable(),
  image_position: z.string().optional().nullable(),
  show_button: z.boolean(),
  text_button: z.string().optional().nullable(),
  url_button: z
    .object({
      title: z.string(),
      url: z.string(),
      target: z.string().optional().nullable(),
    })
    .optional()
    .nullable(),
});

// Esquema para los datos del bloque Mascotas Destacadas
const BlockFeaturedPetsDataSchema = z.object({
  headline: z.string(),
  intro_content: z.string().optional().nullable(),
  // AHORA: Acepta un array de números O un valor 'false' si el campo está vacío.
  featured_pets: z
    .union([z.array(z.number()), z.literal(false), z.literal(''), z.null()])
    .optional()
    .transform((val) => (Array.isArray(val) ? val : [])),
});

// Define la estructura de los datos que vienen de ACF para una mascota
const PetAcfSchema = z.object({
  short_description: z.string().optional().nullable(),
  breed: z.string().optional().nullable(),
  gender: z.string().optional().nullable(),
  age: z.string().optional().nullable(),
  birth_date: z.string().optional().nullable(),
  is_child_friendly: z.boolean().optional().nullable(),
  is_pet_friendly: z.boolean().optional().nullable(),
  is_dog_friendly: z.boolean().optional().nullable(),
  is_cat_friendly: z.boolean().optional().nullable(),
  is_outside_cat: z.boolean().optional().nullable(),
  is_sterilized: z.boolean().optional().nullable(),
  list_date: z.string().optional().nullable(),
  adoption_button_text: z.string().optional().nullable(),
  intro_text_detail: z.string().optional().nullable(),
  use_custom_intro_text: z.boolean().optional().nullable(),
  detail_image: imageSizesSchema.optional().nullable(),
  main_image: imageSizesSchema.optional().nullable(),
  adoption_contact_method: z.string().optional().nullable(),
  whatsapp_number: z.string().optional().nullable(),
});

// El esquema principal para una mascota
export const PetApiSchema = z.object({
  id: z.number(),
  slug: z.string(),
  title: z.object({ rendered: z.string() }),
  content: z.object({ rendered: z.string() }),
  excerpt: z.object({ rendered: z.string() }).optional().nullable(),
  seo_meta: SeoMetaSchema.optional().nullable(),
  // Usamos 'acf' que es lo que devuelve la API por defecto para CPTs.
  acf: PetAcfSchema.optional().nullable(),
});

// --- Esquema del Constructor de Páginas ---

// Define cada bloque posible que puede aparecer en la página
const PageComponentSchema = z.discriminatedUnion('block_type', [
  z.object({
    block_type: z.literal('block_hero'),
    block_data: BlockHeroDataSchema,
  }),
  z.object({
    block_type: z.literal('block_text_image'),
    block_data: BlockTextImageDataSchema,
  }),
  z.object({
    block_type: z.literal('block_featured_pets'),
    block_data: BlockFeaturedPetsDataSchema,
  }),
]);

// --- Esquema Principal de la Página ---

export const PageSchema = z.object({
  id: z.number(),
  title: z.object({ rendered: z.string() }),
  acf_fields: z.object({
    page_components: z.array(PageComponentSchema).optional().nullable(),
  }),
  seo_meta: SeoMetaSchema,
});
