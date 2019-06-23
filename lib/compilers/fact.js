// Copyright (c) 2018, Compiler Explorer Team
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.

const
    BaseCompiler = require('../base-compiler'),
    logger = require('../logger').logger,
    path = require('path');

class FactCompiler extends BaseCompiler {

    constructor(compilerInfo, env) {
        super(compilerInfo, env);
        this.inputBase;
    }

    runCompiler(compiler, options, inputFilename, execOptions) {

        this.inputBase = path.basename(inputFilename, path.extname(inputFilename));
        logger.debug('this.inputBase = ' + this.inputBase);

        return super.runCompiler(compiler, options, inputFilename, execOptions);
   }

    optionsForFilter(filters, outputFilename) {
        return ['-o', this.filename(outputFilename)];
    }

    getDefaultExecOptions() {
        const execOptions = super.getDefaultExecOptions();
        execOptions.env.LD_LIBRARY_PATH="/usr/local/home/facter/.opam/4.06.0/lib/z3";
        execOptions.env.CAML_LD_LIBRARY_PATH="/usr/local/home/facter/.opam/4.06.0/lib/stublibs:/usr/local/home/facter/.opam/4.06.0/lib/ocaml/stublibs:/usr/local/home/facter/.opam/4.06.0/lib/ocaml";
        execOptions.env.MANPATH=":/usr/local/home/facter/.opam/4.06.0/man"
        execOptions.env.OCAML_TOPLEVEL_PATH="/usr/local/home/facter/.opam/4.06.0/lib/toplevel";
        execOptions.env.PATH="/usr/local/home/facter/.opam/4.06.0/bin:/usr/local/home/facter/.local/bin:/usr/lib/llvm-6.0/bin/:/usr/local/bin:/usr/bin:/bin:/snap/bin";
        return execOptions;
    }

}

module.exports = FactCompiler;
