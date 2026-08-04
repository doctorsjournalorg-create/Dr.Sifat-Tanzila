import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ExternalLink,
  BookOpen,
  CheckCircle2,
  Copy,
  Check,
  Award,
  Bookmark,
  Sparkles,
  Share2,
  FileText
} from 'lucide-react';
import { Publication, Language } from '../types';

interface PublicationModalProps {
  publication: Publication | null;
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const PublicationModal: React.FC<PublicationModalProps> = ({
  publication,
  isOpen,
  onClose,
  language
}) => {
  const [copiedCitation, setCopiedCitation] = useState(false);
  const [copiedDoi, setCopiedDoi] = useState(false);

  if (!isOpen || !publication) return null;

  const isBn = language === 'bn';

  const title = isBn && publication.titleBn ? publication.titleBn : publication.title;
  const journal = isBn && publication.journalBn ? publication.journalBn : publication.journal;
  const abstract = isBn && publication.abstractBn ? publication.abstractBn : publication.abstract;
  const keyFindings = isBn && publication.keyFindingsBn ? publication.keyFindingsBn : publication.keyFindings;

  // APA Citation string
  const apaCitation = `${publication.authors} (${publication.year}). ${publication.title}. ${publication.journal}${publication.volumeIssue ? `, ${publication.volumeIssue}` : ''}.${publication.doi ? ` https://doi.org/${publication.doi}` : ''}`;

  const handleCopyCitation = () => {
    navigator.clipboard.writeText(apaCitation);
    setCopiedCitation(true);
    setTimeout(() => setCopiedCitation(false), 2500);
  };

  const handleCopyDoi = () => {
    if (publication.doi) {
      navigator.clipboard.writeText(`https://doi.org/${publication.doi}`);
      setCopiedDoi(true);
      setTimeout(() => setCopiedDoi(false), 2500);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 lg:p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-3xl bg-slate-900 border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden my-auto text-white"
        >
          {/* Header Banner */}
          <div className="relative bg-gradient-to-r from-[#0F3D6E] via-slate-900 to-cyan-950 p-6 sm:p-8 border-b border-cyan-500/20">
            <button
              onClick={onClose}
              id="close-pub-modal-btn"
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Category and Indexing Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                {isBn && publication.categoryBn ? publication.categoryBn : publication.category}
              </span>

              {publication.indexedIn.map((indexName) => (
                <span
                  key={indexName}
                  className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${
                    indexName === 'PubMed'
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                      : indexName === 'Scopus'
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                      : 'bg-blue-500/20 text-blue-300 border-blue-500/30'
                  }`}
                >
                  {indexName}
                </span>
              ))}

              {publication.citationsCount && (
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  {publication.citationsCount} {isBn ? 'সাইটেশন' : 'Citations'}
                </span>
              )}
            </div>

            {/* Paper Title */}
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
              {title}
            </h2>

            {/* Authors */}
            <p className="mt-3 text-sm text-cyan-200/90 font-medium flex items-center gap-2">
              <span className="text-slate-400">{isBn ? 'লেখকবৃন্দ:' : 'Authors:'}</span>
              <span>
                {publication.authors.split(', ').map((author, idx) => (
                  <React.Fragment key={idx}>
                    {idx > 0 && ', '}
                    {author.includes('Shifat Tanzila') ? (
                      <strong className="text-cyan-300 underline underline-offset-2 font-bold">
                        {author}
                      </strong>
                    ) : (
                      <span>{author}</span>
                    )}
                  </React.Fragment>
                ))}
              </span>
            </p>
          </div>

          {/* Modal Scrollable Content */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
            {/* Journal Meta Info Box */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-slate-800/60 border border-white/10 text-xs text-slate-300">
              <div>
                <span className="block text-slate-400 font-medium mb-0.5">{isBn ? 'জার্নাল' : 'Journal'}</span>
                <strong className="text-slate-100 font-semibold">{journal}</strong>
              </div>
              <div>
                <span className="block text-slate-400 font-medium mb-0.5">{isBn ? 'বছর ও ভলিউম' : 'Year & Issue'}</span>
                <strong className="text-slate-100 font-semibold">{publication.year} {publication.volumeIssue ? `(${publication.volumeIssue})` : ''}</strong>
              </div>
              <div>
                <span className="block text-slate-400 font-medium mb-0.5">{isBn ? 'আইডেন্টিফায়ার' : 'Identifiers'}</span>
                <span className="font-mono text-cyan-300">
                  {publication.pmid && `PMID: ${publication.pmid}`}
                  {publication.pmid && publication.doi && ' | '}
                  {publication.doi && `DOI: ${publication.doi}`}
                </span>
              </div>
            </div>

            {/* Abstract Section */}
            <div className="space-y-2">
              <h3 className="text-base font-bold text-cyan-300 flex items-center gap-2">
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>{isBn ? 'গবেষণাপত্রের সারাংশ (Abstract):' : 'Research Abstract:'}</span>
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/50 p-4 rounded-xl border border-white/5 font-normal">
                {abstract}
              </p>
            </div>

            {/* Key Findings / Clinical Takeaways */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-teal-300 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-teal-400" />
                <span>{isBn ? 'মূল গবেষণা সিদ্ধান্ত ও ক্লিনিক্যাল ফলাফল:' : 'Key Clinical Research Takeaways:'}</span>
              </h3>
              <ul className="grid grid-cols-1 gap-2.5">
                {keyFindings.map((finding, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs sm:text-sm text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{finding}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* APA Citation Generator Box */}
            <div className="p-4 rounded-xl bg-slate-950 border border-cyan-500/20 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Bookmark className="w-3.5 h-3.5 text-cyan-400" />
                  {isBn ? 'সাইটেশন ফরম্যাট (APA Style):' : 'APA Citation Format:'}
                </span>
                <button
                  onClick={handleCopyCitation}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-cyan-300 border border-cyan-500/30 transition-colors cursor-pointer"
                >
                  {copiedCitation ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">{isBn ? 'কপি হয়েছে!' : 'Copied!'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{isBn ? 'কপি করুন' : 'Copy Citation'}</span>
                    </>
                  )}
                </button>
              </div>
              <p className="font-mono text-xs text-slate-300 bg-slate-900/90 p-2.5 rounded border border-white/5 break-all select-all">
                {apaCitation}
              </p>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="p-4 sm:p-6 bg-slate-950/90 border-t border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              {publication.doi && (
                <button
                  onClick={handleCopyDoi}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-white/10 transition-colors cursor-pointer"
                >
                  {copiedDoi ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-cyan-400" />
                  )}
                  <span>{copiedDoi ? (isBn ? 'DOI কপি হয়েছে' : 'DOI Copied') : 'Copy DOI Link'}</span>
                </button>
              )}
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-colors cursor-pointer"
              >
                {isBn ? 'বন্ধ করুন' : 'Close'}
              </button>

              <a
                href={publication.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 hover:from-cyan-400 hover:to-teal-300 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all cursor-pointer"
              >
                <span>{isBn ? 'জার্নাল/PubMed এ নিবন্ধটি দেখুন' : 'View Full Paper on PubMed/Journal'}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
