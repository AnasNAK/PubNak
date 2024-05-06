import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { Influencer, Client } from '@/features/influencerSlice';

interface FeedbackProps {
  id: string;
  userId: string;
}

const ClientFeedback: React.FC<FeedbackProps> = ({ id, userId }) => {
  const influencers = useSelector((state: RootState) => state.influencers.influencer) as Influencer[] | null;
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!influencers) return null;

  const influencer = influencers.find((influencer: Influencer) => influencer.id === Number(id));

  if (!influencer) return null;

  const clientFeedback: Client[] = influencer.client || [];

  const handleRating = (value: number) => setRating(value);

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setComment(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   
    
    setSubmitted(true);
  };

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Client Feedback</h2>

        <div>
          {clientFeedback.map((client: Client, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 mb-4">
              <div className="flex items-center mb-2">
                {/* Display client avatar here */}
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className={`text-yellow-500 cursor-pointer ${index < rating ? 'fill-current' : ''}`}
                      onClick={() => handleRating(index + 1)}
                    />
                  ))}
                </div>
                <span className="ml-2">Rating: {rating}</span>
              </div>
              <p>{client.pivot?.comment}</p>
            </div>
          ))}
        </div>

        {!submitted && (
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Leave Feedback</h3>
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-4">
              <div className="mb-4">
                <label htmlFor="comment" className="block font-bold mb-2">
                  Comment
                </label>
                <textarea
                  id="comment"
                  value={comment}
                  onChange={handleCommentChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                  rows={4}
                />
              </div>
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
              >
                Send Feedback
              </button>
            </form>
          </div>
        )}

        {submitted && <p className="text-green-500 font-semibold mt-4">Feedback submitted successfully!</p>}
      </div>
    </div>
  );
};

export default ClientFeedback;
