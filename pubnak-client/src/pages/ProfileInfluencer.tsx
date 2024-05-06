import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import ProfileOverview from '../components/pages/InfluencerProfilePage/ProfileOverview';
import Feedback from '../components/pages/InfluencerProfilePage/Feedback';
import { fetchInfluencerById } from '@/features/influencerSlice';
import withAuth from '@/utils/withAuth';
import Navigation from '../components/common/Navigation/Navigation';
import { AppDispatch } from '@/store/store';

const ProfileInfluencer: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (id) {
            dispatch(fetchInfluencerById(Number(id)));
        }
    }, [dispatch, id]);

    if (!id) {
        return null;
    }

    return (
        <div>
            <ProfileOverview id={id as string} />
            <Navigation />
            <Feedback id={id as string} />
        </div>
    );
}

export default withAuth(ProfileInfluencer);
