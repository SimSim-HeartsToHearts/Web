import React, { useState } from 'react';
import { X } from 'lucide-react';

interface Notice {
  id: number;
  title: string;
  date: string;
  content: string;
}

interface NoticeModalProps {
  notice: Notice;
  onClose: () => void;
}

const NoticeModal: React.FC<NoticeModalProps> = ({ notice, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">{notice.title}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>
        </div>
        <p className="text-sm text-gray-500 mb-4">{notice.date}</p>
        <div className="prose max-w-none">
          <p className="text-gray-700">{notice.content}</p>
        </div>
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const DeveloperNotice: React.FC = () => {
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);

  const notices: Notice[] = [
    {
      id: 1,
      title: "새로운 AI 기능 업데이트",
      date: "2024-03-20",
      content: "AI 챗봇의 성능이 향상되었습니다. 이제 더 자연스러운 대화가 가능합니다."
    },
    {
      id: 2,
      title: "서버 점검 안내",
      date: "2024-03-19",
      content: "3월 25일 새벽 2시부터 4시까지 서버 점검이 예정되어 있습니다."
    },
    {
      id: 3,
      title: "커뮤니티 가이드라인 업데이트",
      date: "2024-03-18",
      content: "커뮤니티 이용 규칙이 업데이트되었습니다. 확인 부탁드립니다."
    }
  ];

  return (
    <section className="mb-12">
      <div className="relative mb-6 flex items-center justify-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-amber-200"></div>
        </div>
        <div className="relative z-10 bg-gray-50 px-4">
          <h2 className="text-xl font-serif font-medium text-amber-600">
            <span className="mr-1">Sim Sim</span>
            <span className="text-sm italic">— Developer Notice</span>
          </h2>
        </div>
      </div>

      <div className="flex flex-col space-y-4">
        {notices.map((notice) => (
          <div
            key={notice.id}
            onClick={() => setSelectedNotice(notice)}
            className="bg-white rounded-lg shadow-sm p-4 cursor-pointer hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-medium text-gray-900">{notice.title}</h3>
              <span className="text-sm text-gray-500">{notice.date}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedNotice && (
        <NoticeModal
          notice={selectedNotice}
          onClose={() => setSelectedNotice(null)}
        />
      )}
    </section>
  );
};

export default DeveloperNotice;