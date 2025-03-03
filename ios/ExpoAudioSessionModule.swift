import ExpoModulesCore
import AVFoundation

public class ExpoAudioSessionModule: Module {  
  public func definition() -> ModuleDefinition {    
    Name("ExpoAudioSession")    
            
    Function("isOtherAudioPlaying") {      
      return AVAudioSession.sharedInstance().isOtherAudioPlaying
    }
  }
}
