import { useParams } from 'react-router';

const useCampaignId = () => {
  let { id } = useParams<{ id: string }>();
  return id ? parseInt(id) : undefined;
};

export default useCampaignId;
