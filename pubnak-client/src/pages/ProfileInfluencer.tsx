import ProfileOverview from '../components/pages/InfluencerProfilePage/ProfileOverview';
import NavigationTabs from '../components/pages/InfluencerProfilePage/NavigationTabs';
import ConnectionsList from '../components/pages/InfluencerProfilePage/ConnectionsList';


const ProfileInfluencer: React.FC = () => {
    return (
        <div>
            <ProfileOverview />
            <NavigationTabs />
            <ConnectionsList />
        </div>
    )
}

export default ProfileInfluencer