// Global MDX components - automatically available in all .mdx files
import { Image } from 'astro:assets';

export const components = {
  img: Image,
  Image: Image,
};
