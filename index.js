import { NativeModules } from 'react-native'

/**
 * [description]
 * @param  {String} environment file name without extension, it will be
 *                  specified by platform
 * @return {Promise}
 */
export default async function (file = '.env') {
  const env = await NativeModules.RNDotEnv.load(file)

  process.env = {
    ...process.env,
    ...env
  }

  return env
}
