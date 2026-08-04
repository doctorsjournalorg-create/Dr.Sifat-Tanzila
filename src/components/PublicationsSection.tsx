import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import {
  BookOpen,
  Search,
  ExternalLink,
  Award,
  Filter,
  Sparkles,
  FileText,
  CheckCircle2,
  ChevronRight,
  Database,
  Quote,
  Layers
} from 'lucide-react';
import { PUBLICATIONS } from '../data/doctorData';
import { Publication, Language } from '../types';
import { PublicationModal } from './PublicationModal';

interface PublicationsSectionProps {
  language: Language;
}

export const PublicationsSection: React.FC<PublicationsSectionProps> = ({ language }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalPublication, setActiveModalPublication] = useState<Publication | null>(null);

  const isBn = language === 'bn';

  // Filter options
  const filterTabs = [
    { id: 'all', label: isBn ? 'সকল গবেষণা' : 'All Publications' },
    { id: 'pubmed', label: isBn ? 'PubMed ইনডেক্সড' : 'PubMed Indexed' },
    { id: 'scopus', label: isBn ? 'Scopus ইনডেক্সড' : 'Scopus Indexed' },
    { id: 'laser', label: isBn ? 'লেজার প্রোক্টোলজি' : 'Laser Proctology' },
    { id: 'laparoscopy', label: isBn ? 'ল্যাপারোস্কোপি' : 'Laparoscopy' },
    { id: 'breast', label: isBn ? 'স্তন সার্জারি' : 'Breast Surgery' }
  ];

  // Filtered publications logic
  const filteredPublications = useMemo(() => {
    return PUBLICATIONS.filter((pub) => {
      // Filter tab check
      let matchesFilter = true;
      if (selectedFilter === 'pubmed') {
        matchesFilter = pub.indexedIn.includes('PubMed');
      } else if (selectedFilter === 'scopus') {
        matchesFilter = pub.indexedIn.includes('Scopus');
      } else if (selectedFilter === 'laser') {
        matchesFilter = pub.category === 'Laser Proctology';
      } else if (selectedFilter === 'laparoscopy') {
        matchesFilter = pub.category === 'Laparoscopy';
      } else if (selectedFilter === 'breast') {
        matchesFilter = pub.category === 'Breast Surgery';
      }

      // Search query check
      let matchesSearch = true;
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const titleMatch = pub.title.toLowerCase().includes(query) || (pub.titleBn && pub.titleBn.toLowerCase().includes(query));
        const journalMatch = pub.journal.toLowerCase().includes(query);
        const authorsMatch = pub.authors.toLowerCase().includes(query);
        const pmidMatch = pub.pmid ? pub.pmid.includes(query) : false;
        const doiMatch = pub.doi ? pub.doi.toLowerCase().includes(query) : false;
        const categoryMatch = pub.category.toLowerCase().includes(query);

        matchesSearch = titleMatch || journalMatch || authorsMatch || pmidMatch || doiMatch || categoryMatch;
      }

      return matchesFilter && matchesSearch;
    });
  }, [selectedFilter, searchQuery]);

  // Compute stats
  const totalPublications = PUBLICATIONS.length;
  const totalCitations = PUBLICATIONS.reduce((acc, curr) => acc + (curr.citationsCount || 0), 0);
  const pubmedCount = PUBLICATIONS.filter((p) => p.indexedIn.includes('PubMed')).length;
  const scopusCount = PUBLICATIONS.filter((p) => p.indexedIn.includes('Scopus')).length;

  return (
    <section
      id="publications"
      className="py-20 lg:py-28 bg-gradient-to-b from-slate-900 via-[#0B2A4C] to-slate-950 text-white relative overflow-hidden scroll-mt-24"
    >
      {/* Background Decorative Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-xs sm:text-sm font-semibold shadow-sm">
            <Award className="w-4 h-4 text-cyan-400" />
            <span>
              {isBn ? 'গবেষণা, জার্নাল ও পিআর-রিভিউড প্রকাশনা' : 'Academic Research & Peer-Reviewed Publications'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            {isBn ? 'পাবমেড ও স্কোপাস ইনডেক্সড বৈজ্ঞানিক প্রকাশনা' : 'PubMed & Scopus Indexed Research'}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            {isBn
              ? 'সহযোগী অধ্যাপক ডাঃ সিফাত তানজিলা আন্তর্জাতিক মানসম্পন্ন আন্তর্জাতিক সার্জিক্যাল জার্নালে পিয়ার-রিভিউড গবেষণা নিবন্ধ প্রকাশ করেছেন। লেজার প্রোক্টোলজি, ল্যাপারোস্কোপি ও স্তন সার্জারির আধুনিক ডায়াগনোসিস ও চিকিৎসার অভিজ্ঞতা এখানে উপস্থাপিত।'
              : 'Dr. Shifat Tanjila actively contributes to evidence-based surgical research. Explore her published studies indexed in PubMed, Scopus, and international medical journals covering minimally invasive surgery, laser proctology, and breast oncology.'}
          </p>
        </motion.div>

        {/* Top Research Metrics Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-cyan-500/20 shadow-xl"
        >
          <div className="p-3 text-center border-r last:border-0 border-white/10">
            <div className="flex items-center justify-center gap-1.5 text-cyan-400 text-2xl sm:text-3xl font-extrabold">
              <BookOpen className="w-6 h-6" />
              <span>{totalPublications}</span>
            </div>
            <p className="text-xs text-slate-300 font-medium mt-1">
              {isBn ? 'মোট গবেষণা নিবন্ধ' : 'Published Articles'}
            </p>
          </div>

          <div className="p-3 text-center border-r last:border-0 border-white/10">
            <div className="flex items-center justify-center gap-1.5 text-emerald-400 text-2xl sm:text-3xl font-extrabold">
              <Database className="w-6 h-6" />
              <span>{pubmedCount}</span>
            </div>
            <p className="text-xs text-slate-300 font-medium mt-1">
              {isBn ? 'PubMed ইনডেক্সড' : 'PubMed Indexed'}
            </p>
          </div>

          <div className="p-3 text-center border-r last:border-0 border-white/10">
            <div className="flex items-center justify-center gap-1.5 text-amber-400 text-2xl sm:text-3xl font-extrabold">
              <Layers className="w-6 h-6" />
              <span>{scopusCount}</span>
            </div>
            <p className="text-xs text-slate-300 font-medium mt-1">
              {isBn ? 'Scopus ইনডেক্সড' : 'Scopus Indexed'}
            </p>
          </div>

          <div className="p-3 text-center">
            <div className="flex items-center justify-center gap-1.5 text-purple-400 text-2xl sm:text-3xl font-extrabold">
              <Quote className="w-6 h-6" />
              <span>{totalCitations}+</span>
            </div>
            <p className="text-xs text-slate-300 font-medium mt-1">
              {isBn ? 'গবেষণা সাইটেশন' : 'Citations Worldwide'}
            </p>
          </div>
        </motion.div>

        {/* Filter Tabs & Live Search Bar Controls */}
        <div className="mt-10 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          
          {/* Category / Index Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  selectedFilter === tab.id
                    ? 'bg-gradient-to-r from-cyan-500 to-teal-400 text-slate-950 shadow-md shadow-cyan-500/20 font-bold scale-105'
                    : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 border border-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px] sm:min-w-[320px]">
            <Search className="w-4 h-4 text-cyan-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isBn ? 'গবেষণার বিষয়, PMID বা কীওয়ার্ড দিয়ে খুঁজুন...' : 'Search by title, PMID, DOI, or keywords...'}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/90 border border-cyan-500/30 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Publications Cards Grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredPublications.length > 0 ? (
            filteredPublications.map((pub, index) => {
              const pubTitle = isBn && pub.titleBn ? pub.titleBn : pub.title;
              const pubJournal = isBn && pub.journalBn ? pub.journalBn : pub.journal;
              const pubAbstract = isBn && pub.abstractBn ? pub.abstractBn : pub.abstract;
              const pubKeyFindings = isBn && pub.keyFindingsBn ? pub.keyFindingsBn : pub.keyFindings;

              return (
                <motion.div
                  key={pub.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-slate-900/80 border border-cyan-500/20 hover:border-cyan-400/50 shadow-xl hover:shadow-cyan-950/50 backdrop-blur-sm transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    
                    {/* Card Top Header: Category Tag & Index Badges */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="px-3 py-1 rounded-lg text-xs font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-400/25 flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5" />
                        {isBn && pub.categoryBn ? pub.categoryBn : pub.category}
                      </span>

                      <div className="flex items-center gap-1.5">
                        {pub.indexedIn.map((idxName) => (
                          <span
                            key={idxName}
                            className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                              idxName === 'PubMed'
                                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                                : idxName === 'Scopus'
                                ? 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                                : 'bg-blue-500/20 text-blue-300 border-blue-500/30'
                            }`}
                          >
                            {idxName}
                          </span>
                        ))}
                        <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-white/10 text-slate-300">
                          {pub.year}
                        </span>
                      </div>
                    </div>

                    {/* Article Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                      {pubTitle}
                    </h3>

                    {/* Authors List */}
                    <p className="text-xs text-slate-300 font-medium">
                      <span className="text-slate-400 font-semibold">{isBn ? 'লেখকবৃন্দ:' : 'Authors:'} </span>
                      {pub.authors.split(', ').map((author, i) => (
                        <React.Fragment key={i}>
                          {i > 0 && ', '}
                          {author.includes('Shifat Tanjila') ? (
                            <strong className="text-cyan-300 underline font-semibold">
                              {author}
                            </strong>
                          ) : (
                            <span>{author}</span>
                          )}
                        </React.Fragment>
                      ))}
                    </p>

                    {/* Journal Name & Volume */}
                    <div className="text-xs text-slate-400 font-medium flex items-center gap-2">
                      <span className="italic text-slate-200">{pubJournal}</span>
                      {pub.volumeIssue && (
                        <span>• {pub.volumeIssue}</span>
                      )}
                    </div>

                    {/* Abstract Snippet */}
                    <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed line-clamp-3 bg-slate-950/40 p-3 rounded-xl border border-white/5">
                      {pubAbstract}
                    </p>

                    {/* Quick Bullet Findings Highlights */}
                    <div className="space-y-1.5 pt-1">
                      <p className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider">
                        {isBn ? 'মূল গবেষণা ফলাফল:' : 'Key Clinical Takeaway:'}
                      </p>
                      <div className="flex items-start gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{pubKeyFindings[0]}</span>
                      </div>
                    </div>

                  </div>

                  {/* Card Bottom Actions */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setActiveModalPublication(pub)}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-xs font-bold border border-cyan-400/30 transition-all cursor-pointer group-hover:border-cyan-400"
                    >
                      <FileText className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{isBn ? 'সারাংশ ও সম্পূর্ণ বিবরণী' : 'View Abstract & Details'}</span>
                    </button>

                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-white/10 transition-colors cursor-pointer"
                      title={isBn ? 'জার্নালে বিস্তারিত দেখুন' : 'View on PubMed/Journal'}
                    >
                      <span>{pub.pmid ? `PMID: ${pub.pmid}` : 'Journal Link'}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                    </a>
                  </div>
                </motion.div>
              );
            })
          ) : (
            <div className="col-span-full text-center py-12 p-8 rounded-2xl bg-slate-900/60 border border-white/10">
              <Search className="w-10 h-10 text-cyan-400 mx-auto mb-3 opacity-60" />
              <h4 className="text-lg font-bold text-white mb-1">
                {isBn ? 'কোনো নিবন্ধ পাওয়া যায়নি' : 'No publications match your filter'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto mb-4">
                {isBn
                  ? 'আপনার সার্চ ফিল্টারের সাথে মিলে এমন কোনো গবেষণা প্রকাশনা পাওয়া যায়নি। অনুগ্রহ করে অন্য ফিল্টার চেষ্টা করুন।'
                  : 'Try adjusting your search terms or selecting a different index filter tab above.'}
              </p>
              <button
                onClick={() => {
                  setSelectedFilter('all');
                  setSearchQuery('');
                }}
                className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 text-xs font-bold shadow-md hover:bg-cyan-400 transition-colors"
              >
                {isBn ? 'সকল গবেষণা দেখুন' : 'Reset All Filters'}
              </button>
            </div>
          )}
        </div>

        {/* PubMed & Medical Journal Verification Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-cyan-950/60 via-slate-900 to-slate-900 border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span>
                {isBn
                  ? 'আন্তর্জাতিক বৈজ্ঞানিক ডাটাবেসে নিবন্ধ ও রেফারেন্স'
                  : 'Verified Medical & Surgical Database Indexing'}
              </span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              {isBn
                ? 'অনুরোধক্রমে রোগীরা সম্পূর্ণ গবেষণাপত্রের পিডিএফ (PDF) বা অফিশিয়াল জার্নাল কপি দেখতে পারেন।'
                : 'All research articles adhere to international peer-review standards. Digital Object Identifiers (DOI) and PubMed IDs are directly linked.'}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-bold border border-cyan-500/30 transition-colors"
            >
              <span>{isBn ? 'পাবমেড ডাটাবেস' : 'PubMed Direct'}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      {/* Modal for viewing detailed publication & abstract */}
      <PublicationModal
        publication={activeModalPublication}
        isOpen={!!activeModalPublication}
        onClose={() => setActiveModalPublication(null)}
        language={language}
      />
    </section>
  );
};
