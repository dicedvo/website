import { cp } from 'fs/promises';
import { existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { basename } from 'path';
import type { AstroIntegration } from "astro";

export default function copyDir(paths: string[]): AstroIntegration {
    return {
        name: 'dicedvo.org/copy-dir',
        hooks: {
            'astro:build:done': async ({ dir, logger }) => {
                for (const path of paths) {
                    const destName = basename(path);
                    const destPath = fileURLToPath(new URL(destName, dir));

                    logger.info(`Copying ${path} to ${destPath}.`);
                    if (!existsSync(path)) {
                        logger.error(`Path ${path} does not exist.`);
                        break;
                    }


                    if (existsSync(destPath)) {
                        logger.info(`Skipping ${path}. Directory already exists.`);
                        continue;
                    }

                    await cp(path, destPath, { recursive: true });
                }
            }
        }
    }
}