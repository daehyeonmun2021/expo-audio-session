// Reexport the native module. On web, it will be resolved to ExpoAudioSessionModule.web.ts
// and on native platforms to ExpoAudioSessionModule.ts
export { default } from './ExpoAudioSessionModule';
export { default as ExpoAudioSessionView } from './ExpoAudioSessionView';
export * from  './ExpoAudioSession.types';
