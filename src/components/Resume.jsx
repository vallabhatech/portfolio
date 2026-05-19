import resume from '../assets/startup.pdf';
import { useEffect } from 'react';

export default function Resume() {
  useEffect(() => {
    window.location.href = resume;
  }, []);

  return (
    <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center">
      <p className="text-white">Loading resume...</p>
    </div>
  );
}
