package expo.modules.audiosession

import android.content.Context
import android.media.AudioManager
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoAudioSessionModule : Module() {  
  override fun definition() = ModuleDefinition {    
    Name("ExpoAudioSession")
    
    Function("isOtherAudioPlaying") {
      val audioManager = appContext.reactContext?.getSystemService(Context.AUDIO_SERVICE) as? AudioManager
      return audioManager?.isMusicActive ?: false
    }  
  }
}
