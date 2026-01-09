"use client";

import AtlabFullAccess from '@/shared/ui/AtlabFullAccess/ui/AtlabFullAccess'
import React from 'react'
import { useSearchParams } from 'next/navigation'

const Page = () => {
  const searchParams = useSearchParams();
  const flow = searchParams.get('flow');
  
  // Если flow=works, показываем только combo и works тарифы
  const filterTabs = flow === 'works' ? ['combo', 'works'] : undefined;
  
  return (
    <div>
        <AtlabFullAccess filterTabs={filterTabs} />
    </div>
  )
}

export default Page