import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template : "%s | Invoice",
    default : "Invoice",
  },
};

import React from 'react'

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>{children}</div>
  )
}

export default layout