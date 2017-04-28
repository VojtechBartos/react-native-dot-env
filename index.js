import { NativeModules } from 'react-native'

/**
 * [description]
 * @param  {String} environment file name without extension, it will be
 *                  specified by platform
 * @return {Promise}
 */
export default async function (file = 'environment') {
  const env = await NativeModules.RNDotEnv.loadPlist(file)

  process.env = {
    ...process.env,
    ...env
  }

  return env
}