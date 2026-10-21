// Offline text recognition (macOS Vision) — prints one line per text block: y% <tab> x-centre% <tab> text, top to bottom
import Foundation
import Vision
import AppKit
let url = URL(fileURLWithPath: CommandLine.arguments[1])
guard let img = NSImage(contentsOf: url), let cg = img.cgImage(forProposedRect: nil, context: nil, hints: nil) else { exit(1) }
let req = VNRecognizeTextRequest()
req.recognitionLevel = .accurate
req.usesLanguageCorrection = false
try VNImageRequestHandler(cgImage: cg).perform([req])
for o in (req.results ?? []).sorted(by: { $0.boundingBox.maxY > $1.boundingBox.maxY }) {
  if let t = o.topCandidates(1).first?.string { print("\(Int((1 - o.boundingBox.midY) * 100))\t\(Int(o.boundingBox.midX * 100))\t\(t)") }
}
