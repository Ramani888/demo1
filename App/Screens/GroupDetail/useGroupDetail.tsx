import React, { useEffect, useState } from 'react'
import { serverGetGroupsWithDetails } from '../../services/serverApi';

const useGroupDetail = (groupId?: number) => {
    const [groupDetailData, setGroupDetailData] = useState<any>([]);

    const getGroupGroupDetailData = async () => {
        try {
            const res = await serverGetGroupsWithDetails(groupId);
            setGroupDetailData(res)
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getGroupGroupDetailData()
    }, [groupId])
  return {
    groupDetailData
  }
}

export default useGroupDetail