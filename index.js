import { NativeModules } from 'react-native'

/**
 * Loading environment variables from specified reference file and extending
 * process environment variables, optionably possible to turn it off
 * @param  {String}  environment file name without extension, it will be
 *                   specified by platform
 * @param  {Boolean} extend process.env or not, default ture
 * @return {Promise}
 */
export async function loadConfig (reference = '.env', extendProcess = true) {
  const env = await NativeModules.RNDotEnv.load(reference)

  if (extendProcess) {
    process.env = {
      ...process.env,
      ...env
    }
  }

  return env
}

/**
 * Loading .env secure credentials to process environment
 * @return {Object} environment variables
 */
export default function () {
  const module = NativeModules.RNDotEnv
  let env = {}

  for (const key of Object.keys(module)) {
    if (typeof module[key] !== "function") {
      env[key] = module[key]
    }
  }

  // extending process.env
  process.env = {
    ...process.env,
    ...env
  }

  return env
}
