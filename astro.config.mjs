// @ts-check
import { defineConfig } from 'astro/config';
import zeabur from '@zeabur/astro-adapter/serverless'

// https://astro.build/config
export default defineConfig({
	adapter: zeabur(),
	output: 'server',
});
