"use client"

import Topbar from '@/components/Topbar/Topbar'
import Workspace from '../../../components/Workspace/Workspace'
import { FC } from 'react'
import useHasMounted from '@/hooks/useHasMounted';

interface ProblemPageProps {

}

const page: FC<ProblemPageProps> = ({ }) => {
    const hasMounted = useHasMounted();

    if (!hasMounted) return null;

    return (
        <div>
            <Topbar problemPage={true} />
            <Workspace />
        </div>
    )
}

export default page