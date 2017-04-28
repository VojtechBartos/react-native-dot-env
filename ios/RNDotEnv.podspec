require 'json'
package = JSON.parse(File.read('../package.json'))

Pod::Spec.new do |s|
  s.name = "RNDotEnv"
  s.version = package["version"]
  s.summary = "RNDotEnv"
  s.description = package["description"]
  s.homepage = package["homepage"]
  s.license = package["license"]
  s.author = { "Vojtech Bartos" => "hi@vojtech.me" }
  s.platform = :ios, "8.0"
  s.source = { :git => "https://github.com/VojtechBartos/react-native-dot-env.git", :tag => s.version }
  s.source_files  = "**/*.{h,m}"
  s.requires_arc = true

  s.dependency "React"
end
