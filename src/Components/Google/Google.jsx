import React, { useState } from 'react'
import { Star, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react'

const Review = () => {
  // Google's official colors
  const googleBlue = "#4285F4"
  const googleRed = "#EA4335"
  const googleYellow = "#FBBC05"
  const googleGreen = "#34A853"

  // Example review data with 8 reviews
  const reviews = [
    {
      id: 1,
      name: "Sarah J.",
      rating: 5,
      timeAgo: "2w ago",
      comment: "Absolutely fantastic service! The staff was helpful and went above and beyond. Highly recommend!",
      verified: true
    },
    {
      id: 2,
      name: "Michael R.",
      rating: 4,
      timeAgo: "1m ago",
      comment: "Great experience overall. The only reason for 4 stars is the wait time was longer than expected.",
      verified: false
    },
    {
      id: 3,
      name: "Emily C.",
      rating: 5,
      timeAgo: "3d ago",
      comment: "This place exceeded my expectations! Every interaction was pleasant and the attention to detail is impressive.",
      verified: true
    },
    {
      id: 4,
      name: "David T.",
      rating: 5,
      timeAgo: "2m ago",
      comment: "I've been a regular customer for over a year now and have never been disappointed. Remarkable service!",
      verified: true
    },
    {
      id: 5,
      name: "Lisa M.",
      rating: 5,
      timeAgo: "1w ago",
      comment: "Excellent customer service and quality products. Will definitely return!",
      verified: true
    },
    {
      id: 6,
      name: "Robert K.",
      rating: 4,
      timeAgo: "3w ago",
      comment: "Very good service and friendly staff. Only missing 5 stars because of pricing.",
      verified: false
    },
    {
      id: 7,
      name: "Jennifer W.",
      rating: 5,
      timeAgo: "5d ago",
      comment: "Outstanding experience from start to finish. The team truly cares about their customers.",
      verified: true
    },
    {
      id: 8,
      name: "Kevin P.",
      rating: 5,
      timeAgo: "2w ago",
      comment: "Top-notch service! Truly impressed with how they handled everything. Will be back!",
      verified: false
    }
  ];

  // State to track expanded comments
  const [expandedComments, setExpandedComments] = useState({});

  // Toggle comment expansion
  const toggleComment = (id) => {
    setExpandedComments({
      ...expandedComments,
      [id]: !expandedComments[id]
    });
  };

  // Render stars based on rating
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, index) => (
      <Star 
        key={index} 
        size={12} 
        fill={index < rating ? "currentColor" : "none"} 
        strokeWidth={index < rating ? 0 : 1.5}
        className={index < rating ? "text-yellow-400" : "text-gray-300"}
      />
    ));
  };

  return (
    <div className="relative h-auto min-h-[40vh] bg-white w-full flex flex-col items-center overflow-x-hidden">
      <div className="w-full bg-[#f7fbfc] p-2">
        {/* Header section - responsive layout */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2 px-1 md:px-2 pb-2 gap-2">
          <div className="flex flex-col gap-1">
            <h2 className="font-sans text-lg font-medium">
              <span style={{ color: googleBlue }}>G</span>
              <span style={{ color: googleRed }}>o</span>
              <span style={{ color: googleYellow }}>o</span>
              <span style={{ color: googleBlue }}>g</span>
              <span style={{ color: googleGreen }}>l</span>
              <span style={{ color: googleRed }}>e</span>
              <span className="text-gray-700"> Reviews</span>
            </h2>
            <div className="flex items-center">
              <div className="flex text-yellow-400 mr-1">
                <Star size={14} fill="currentColor" strokeWidth={0} />
                <Star size={14} fill="currentColor" strokeWidth={0} />
                <Star size={14} fill="currentColor" strokeWidth={0} />
                <Star size={14} fill="currentColor" strokeWidth={0} />
                <Star size={14} fill="currentColor" strokeWidth={0} />
              </div>
              <p className="font-medium text-sm">5.0 <span className="text-gray-500 text-xs">({reviews.length} reviews)</span></p>
            </div>
          </div>
          <div className="w-full md:w-auto"> 
            <a href="#" className="block w-full md:w-auto text-center new-font bg-[#4458a3] px-4 md:px-6 py-2 text-white hover:bg-[#5e7adf] rounded text-xs font-medium transition-colors">
              Review on Google
            </a>
          </div>
        </div>

        {/* Reviews section - responsive grid */}
        <div className="h-auto max-h-[50vh] overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-1">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white p-2 rounded shadow-sm">
                <div className="flex items-center gap-1 mb-1">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
                    {review.name.charAt(0)}
                  </div>
                  <span className="text-xs font-medium truncate">{review.name}</span>
                  {review.verified && (
                    <div className="flex items-center text-green-600 text-xs">
                      <CheckCircle size={10} />
                    </div>
                  )}
                </div>
                
                <div className="flex items-center gap-1 mb-1">
                  <div className="flex">
                    {renderStars(review.rating)}
                  </div>
                  <span className="text-gray-500 text-xs">{review.timeAgo}</span>
                </div>
                
                <div className="text-xs text-gray-700 h-16 overflow-hidden break-words">
                  {expandedComments[review.id] || review.comment.length <= 100 
                    ? review.comment 
                    : `${review.comment.substring(0, 100)}...`}
                </div>
                
                {review.comment.length > 100 && (
                  <button 
                    onClick={() => toggleComment(review.id)} 
                    className="text-blue-600 text-xs flex items-center mt-1 hover:text-blue-800"
                  >
                    {expandedComments[review.id] ? (
                      <>Less <ChevronUp size={10} className="ml-1" /></>
                    ) : (
                      <>More <ChevronDown size={10} className="ml-1" /></>
                    )}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review