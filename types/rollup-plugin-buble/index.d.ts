// Type definitions for rollup-plugin-buble 0.19
// Project: https://github.com/rollup/rollup-plugin-buble#readme
// Definitions by: Hugo Alliaume <https://github.com/Kocal>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import { TransformOptions } from "buble";
import { Plugin } from "rollup";

declare namespace buble {
    interface Options extends TransformOptions {
        // Every files will be parsed by default, but you can specify which files to include or exclude
        include?: Array<string | RegExp> | string | RegExp | null | undefined;
        exclude?: Array<string | RegExp> | string | RegExp | null | undefined;
    }
}

export = buble;
declare function buble(options?: buble.Options): Plugin;
