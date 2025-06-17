import { Clipboard, Code2, Share2, Save, RefreshCw, Repeat2, MoreHorizontal, Pencil } from 'lucide-react';

export default function MainContent() {
  return (
    <main className="w-full bg-white p-10 md:p-10 rounded-2xl">
      {/* Title and actions */}
      <div className="w-full border-b pb-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-lg font-medium text-gray-800">Untitled prompt</h1>
          <Pencil className="w-4 h-4 text-gray-500 cursor-pointer" />
        </div>

        <div className="flex items-center space-x-4 text-gray-600">
          <Clipboard className="w-4 h-4 cursor-pointer" />
          <Code2 className="w-4 h-4 cursor-pointer" />
          <Share2 className="w-4 h-4 cursor-pointer" />
          <Save className="w-4 h-4 cursor-pointer" />
          <Repeat2 className="w-4 h-4 cursor-pointer rotate-180" />
          <RefreshCw className="w-4 h-4 cursor-not-allowed opacity-50" />
          <MoreHorizontal className="w-5 h-5 cursor-pointer" />
        </div>
      </div>

      {/* Welcome section */}
      <section className="text-center mt-10">
        <h2 className="text-3xl font-semibold bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">Welcome to AI Studio</h2>
        
        <div className="mt-6 flex justify-center">
          <input
            type="text"
            placeholder="Order common coffee drinks from virtual barista →"
            className="rounded-full px-6 py-3 w-full max-w-xl border border-gray-300 shadow-sm focus:outline-none"
          />
          <button className="ml-2 px-5 py-2 bg-gray-200 rounded-full text-sm font-medium hover:bg-gray-300">
            Run <kbd className="ml-1 text-xs text-gray-500">Ctrl ↵</kbd>
          </button>
        </div>
      </section>

      {/* What's new */}
     <section className="mt-10">
  <h3 className="text-sm text-gray-500 font-medium mb-4">What's new</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-6xl">
    {/* Card 1 */}
    <div className="bg-blue-50 p-4 rounded-xl flex items-start gap-4 shadow-sm">
      <img src="/icons/url-icon.png" alt="URL context" className="w-10 h-10" />
      <div>
        <div className="flex items-center gap-2">
          <h4 className="font-semibold text-sm">URL context tool</h4>
          <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">New</span>
        </div>
        <p className="text-sm text-gray-600">Fetch information from web links</p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-blue-50 p-4 rounded-xl flex items-start gap-4 shadow-sm">
      <img src="/icons/audio-icon.png" alt="Audio dialog" className="w-10 h-10" />
      <div>
        <div className="flex items-center gap-2">
          <h4 className="font-semibold text-sm">Live audio-to-audio dialog</h4>
          <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">New</span>
        </div>
        <p className="text-sm text-gray-600">Try Gemini’s real-time dialog with audio/video</p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-blue-50 p-4 rounded-xl flex items-start gap-4 shadow-sm">
      <img src="/icons/speech-icon.png" alt="Speech" className="w-10 h-10" />
      <div>
        <div className="flex items-center gap-2">
          <h4 className="font-semibold text-sm">Native speech generation</h4>
          <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">New</span>
        </div>
        <p className="text-sm text-gray-600">Generate high quality text to speech with Gemini</p>
      </div>
    </div>

    {/* Card 4 */}
    <div className="bg-blue-50 p-4 rounded-xl flex items-start gap-4 shadow-sm">
      <img src="/icons/image-icon.png" alt="Image gen" className="w-10 h-10" />
      <div>
        <div className="flex items-center gap-2">
          <h4 className="font-semibold text-sm">Native image generation</h4>
          <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">New</span>
        </div>
        <p className="text-sm text-gray-600">Gemini 2.0 Flash with interleaved text+image gen</p>
      </div>
    </div>
  </div>
</section>

    </main>
  );
}
