"use client";

import AtlabFullAccess from '@/shared/ui/AtlabFullAccess/ui/AtlabFullAccess'
import React, { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

const FullAccessContent = () => {
  const searchParams = useSearchParams();
  const flow = searchParams.get('flow');
  
  // Если flow=works, показываем только combo и works тарифы
  const filterTabs = flow === 'works' ? ['combo', 'works'] : undefined;
  
  return <AtlabFullAccess filterTabs={filterTabs} />;
}

const Page = () => {
  return (
    <div>
      <Suspense fallback={<div>Загрузка...</div>}>
        <FullAccessContent />
      </Suspense>
    </div>
  )
}

export default Page