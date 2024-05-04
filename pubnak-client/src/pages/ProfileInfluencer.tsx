import ProfileOverview from '../components/pages/InfluencerProfilePage/ProfileOverview';
// import NavigationTabs from '../components/pages/InfluencerProfilePage/NavigationTabs';
import ConnectionsList from '../components/pages/InfluencerProfilePage/ConnectionsList';
import withAuth from '@/utils/withAuth';
import Navigation from '../components/common/Navigation/Navigation';



const ProfileInfluencer: React.FC = () => {
    return (
        <div>

            <ProfileOverview />
            <Navigation />
            {/* <NavigationTabs /> */}
            <ConnectionsList />
        </div>
    )
}

export default withAuth(ProfileInfluencer);