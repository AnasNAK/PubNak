import React from 'react'
import FeedContent from '../components/pages/Feed/Feed'
import withAuth from '@/utils/withAuth'


 const Feed:React.FC = () => {
  return (
    <div>
        <FeedContent />
    </div>
  )
}
export default withAuth(Feed);