/**
 * @amlplugins/google-cloud-translate
 *
 * Thin namespaced re-export of the native @google-cloud/translate SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Cloud Translation.
 */

import * as _sdk from "@google-cloud/translate";
export * from "@google-cloud/translate";
export { _sdk as sdk };
export default _sdk;
