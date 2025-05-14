import React, { useState } from 'react';
import { Music, Quote, BookOpen, Plus, X } from 'lucide-react';
import SectionTitle from './SectionTitle';

interface HealingContent {
  type: 'quote' | 'music' | 'reading';
  title: string;
  content: string;
  source?: string;
  link?: string;
  author: string;
}

interface AddContentModalProps {
  type: 'quote' | 'music' | 'reading';
  onClose: () => void;
  onAdd: (content: HealingContent) => void;
}

const AddContentModal: React.FC<AddContentModalProps> = ({ type, onClose, onAdd }) => {
  const [formData, setFormData] = useState<Partial<HealingContent>>({
    type,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({
      ...formData,
      type,
      title: type === 'quote' ? '오늘의 힐링 문구' : type === 'music' ? 'Healing Music' : '추천 독서',
      author: 'Anonymous'
    } as HealingContent);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium capitalize">{type} 추가하기</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={20} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {type === 'quote' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">문구</label>
                <textarea
                  value={formData.content || ''}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="w-full p-2 border rounded-md h-32"
                  placeholder="힐링 문구를 입력하세요"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">저자</label>
                <input
                  type="text"
                  value={formData.source || ''}
                  onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                  className="w-full p-2 border rounded-md"
                  placeholder="저자를 입력하세요"
                  required
                />
              </div>
            </>
          )}
          {type === 'music' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">노래 제목</label>
                <input
                  type="text"
                  value={formData.content || ''}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="w-full p-2 border rounded-md"
                  placeholder="노래 제목을 입력하세요"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">링크</label>
                <input
                  type="url"
                  value={formData.link || ''}
                  onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                  className="w-full p-2 border rounded-md"
                  placeholder="음악 링크를 입력하세요"
                  required
                />
              </div>
            </>
          )}
          {type === 'reading' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">책 제목</label>
                <input
                  type="text"
                  value={formData.content || ''}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="w-full p-2 border rounded-md"
                  placeholder="책 제목을 입력하세요"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">저자</label>
                <input
                  type="text"
                  value={formData.source || ''}
                  onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                  className="w-full p-2 border rounded-md"
                  placeholder="저자를 입력하세요"
                  required
                />
              </div>
            </>
          )}
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-700"
            >
              취소
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600"
            >
              추가하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const HealingSection: React.FC = () => {
  const [activeType, setActiveType] = useState<'quote' | 'music' | 'reading'>('quote');
  const [showAddModal, setShowAddModal] = useState(false);
  const [content, setContent] = useState<HealingContent[]>([
    {
      type: 'quote',
      title: '오늘의 힐링 문구',
      content: '당신의 미소가 누군가에게는 힘이 됩니다',
      source: '- 마더 테레사',
      author: 'user1'
    },
    {
      type: 'music',
      title: 'Healing Playlist',
      content: 'Relaxing Piano Music',
      link: 'https://example.com/playlist',
      author: 'user2'
    },
    {
      type: 'reading',
      title: '추천 독서',
      content: '마음챙김의 시작',
      source: '존 카밧진',
      author: 'user3'
    }
  ]);

  const getIcon = (type: string) => {
    switch (type) {
      case 'quote':
        return <Quote className="w-6 h-6" />;
      case 'music':
        return <Music className="w-6 h-6" />;
      case 'reading':
        return <BookOpen className="w-6 h-6" />;
      default:
        return null;
    }
  };

  const handleAddContent = (newContent: HealingContent) => {
    setContent([...content, newContent]);
  };

  return (
    <section className="mb-12">
      <SectionTitle title="Today's Healing" />
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-center space-x-4 mb-6">
          {['quote', 'music', 'reading'].map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type as 'quote' | 'music' | 'reading')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                activeType === type
                  ? 'bg-amber-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {getIcon(type)}
              <span className="capitalize">{type}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content
            .filter((item) => item.type === activeType)
            .map((item, index) => (
              <div
                key={index}
                className="bg-amber-50 rounded-lg p-6 flex flex-col items-center text-center relative"
              >
                <div className="text-amber-500 mb-4">
                  {getIcon(item.type)}
                </div>
                <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-2">{item.content}</p>
                {item.source && (
                  <p className="text-sm text-gray-500">{item.source}</p>
                )}
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:text-amber-700 mt-2"
                  >
                    Listen Now
                  </a>
                )}
                <p className="absolute bottom-2 right-2 text-xs text-gray-400">
                  by {item.author}
                </p>
              </div>
            ))}
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-gray-100 rounded-lg p-6 flex flex-col items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors cursor-pointer"
          >
            <Plus className="w-8 h-8 mb-2" />
            <span>Add New Content</span>
          </button>
        </div>
      </div>

      {showAddModal && (
        <AddContentModal
          type={activeType}
          onClose={() => setShowAddModal(false)}
          onAdd={handleAddContent}
        />
      )}
    </section>
  );
};

export default HealingSection;