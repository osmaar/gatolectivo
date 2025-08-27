import { z } from 'astro:content';

const imageSchema = z.object({
  url: z.string(),
  width: z.number(),
  height: z.number(),
  alt: z.string().optional(),
});

export const featuredImagesSchema = z.object({
  thumbnail: imageSchema,
  medium: imageSchema,
  medium_large: imageSchema,
  large: imageSchema,
  extra_large: imageSchema,
  full: imageSchema,
  'pets-thumbnail': imageSchema,
});

export const buttonActionSchema = z.object({
  show_button: z.boolean(),
  text_button: z.string(),
  url_button: z.string(),
});

export const BaseWPSchema = z.object({
  id: z.number(),
  title: z.object({
    rendered: z.string(),
  }),
  content: z.object({
    rendered: z.string(),
  }),
  acf: z.object({
    subtitle: z.string(),
  }),
  featured_images: featuredImagesSchema,
  button_action: buttonActionSchema,
});
