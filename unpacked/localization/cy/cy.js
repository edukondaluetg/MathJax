/* -*- Mode: Javascript; indent-tabs-mode:nil; js-indent-level: 2 -*- */
/* vim: set ts=2 et sw=2 tw=80: */

/*************************************************************
 *
 *  MathJax/localization/cy/cy.js
 *
 *  Copyright (c) 2009-2013 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */

MathJax.Localization.addTranslation("cy",null,{
  menuTitle: "Cymraeg",
  version: "2.3",
  isLoaded: true,
  domains: {
    "_": {
        version: "2.3",
        isLoaded: true,
        strings: {
          MathProcessingError: "Gwall prosesu mathemateg",
          MathError: "Gwall mathemategol",
          LoadFile: "Yn llwytho %1",
          Loading: "Yn llwytho",
          LoadFailed: "Methwyd llwytho'r ffeil: %1",
          ProcessMath: "Prosesu'r math'g: %1%%",
          Processing: "Yn prosesu",
          TypesetMath: "Yn gosod fformat i'r math'g: %1%%",
          Typesetting: "Yn gosod fformat",
          MathJaxNotSupported: "'Dyw eich porwr ddim yn cynnal MathJax"
        }
    },
    "FontWarnings": {},
    "HTML-CSS": {},
    "HelpDialog": {},
    "MathML": {},
    "MathMenu": {},
    "TeX": {}
  },
  plural: function (n) {
      if (n === 1) {return 1} // one // needs check
      return 2; // other // needs check
    },
  number: function (n) {
      return n; // needs check
    }
});

MathJax.Ajax.loadComplete("[MathJax]/localization/cy/cy.js");
