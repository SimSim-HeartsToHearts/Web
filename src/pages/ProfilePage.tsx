import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, Save, ArrowLeft } from 'lucide-react';

interface UserProfile {
  realName: string;
  username: string;
  phone: string;
  profileImage: string;
}

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<UserProfile>({
    realName: '홍길동',
    username: 'honggildong',
    phone: '010-1234-5678',
    profileImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
  });

  const [tempProfile, setTempProfile] = useState(profile);

  const handleImageClick = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setTempProfile({
            ...tempProfile,
            profileImage: e.target?.result as string
          });
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  const handleSave = () => {
    setProfile(tempProfile);
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <button
        onClick={() => navigate('/mypage')}
        className="mb-6 flex items-center text-amber-600 hover:text-amber-700"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to My Page
      </button>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex flex-col items-center mb-8">
          <div className="relative">
            <div
              className="w-32 h-32 rounded-full overflow-hidden cursor-pointer group"
              onClick={isEditing ? handleImageClick : undefined}
            >
              <img
                src={tempProfile.profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
              {isEditing && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Camera className="w-8 h-8 text-white" />
                </div>
              )}
            </div>
          </div>
          
          {!isEditing ? (
            <button
              onClick={() => {
                setIsEditing(true);
                setTempProfile(profile);
              }}
              className="mt-4 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
            >
              Edit Profile
            </button>
          ) : (
            <div className="flex space-x-4 mt-4">
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center"
              >
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </button>
              <button
                onClick={() => {
                  setIsEditing(false);
                  setTempProfile(profile);
                }}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Real Name
            </label>
            {isEditing ? (
              <input
                type="text"
                value={tempProfile.realName}
                onChange={(e) => setTempProfile({ ...tempProfile, realName: e.target.value })}
                className="w-full p-2 border rounded-md"
              />
            ) : (
              <p className="text-gray-900">{profile.realName}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            {isEditing ? (
              <input
                type="text"
                value={tempProfile.username}
                onChange={(e) => setTempProfile({ ...tempProfile, username: e.target.value })}
                className="w-full p-2 border rounded-md"
              />
            ) : (
              <p className="text-gray-900">{profile.username}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            {isEditing ? (
              <input
                type="tel"
                value={tempProfile.phone}
                onChange={(e) => setTempProfile({ ...tempProfile, phone: e.target.value })}
                className="w-full p-2 border rounded-md"
              />
            ) : (
              <p className="text-gray-900">{profile.phone}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;