import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import CommunityPage from './pages/CommunityPage';
import PostDetail from './pages/PostDetail';
import MyPage from './pages/MyPage';
import ProfilePage from './pages/ProfilePage';
import ChatbotPage from './pages/ChatbotPage';
import ChatHistoryPage from './pages/ChatHistoryPage';
import AIReportPage from './pages/AIReportPage';
import AILetterPage from './pages/AILetterPage';
import AILetterHistoryPage from './pages/AILetterHistoryPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route
          path="/*"
          element={
            <div className="min-h-screen bg-gray-50">
              <Navbar />
              <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/community" element={<CommunityPage />} />
                <Route path="/community/:id" element={<PostDetail />} />
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/chatbot" element={<ChatbotPage />} />
                <Route path="/chat-history" element={<ChatHistoryPage />} />
                <Route path="/ai-report" element={<AIReportPage />} />
                <Route path="/ai-letter" element={<AILetterPage />} />
                <Route path="/ai-letter-history" element={<AILetterHistoryPage />} />
              </Routes>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;