import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import React from 'react'
import { Card ,CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const LandingPage = () => {
  return (
    
      <main className='flex flex-col gap-10 sm:gap-20 py-10 sm:py-10'>
        
        <section className='text-center'>
          <h1 className='flex flex-col items-center justify-center gradient-title text-4xl font-extrabold sm:text-6xl lg:text-8xl tracking-tighter py-4'>Find Your Dream Job 
            <span className='flex items-center gap-2 sm:gap-6' >With 
              <img src="./Remove background project.png" alt="JobGenie" className='h-20 sm:h-32 lg:h-36' />
            </span>
            </h1>
            <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
                Explore thousands of job listings or find the perfect candidate
            </p>
            
        </section>

        <div className='flex gap-8 justify-center'>
          <Link to="/jobs">
            <Button variant="blue" size="xl">Find Jobs</Button>
          </Link>
          <Link to="/post-jobs">
            <Button variant="destructive" size="xl">Post a Job</Button>
          </Link>
        </div>

        <img src='/banner1.png' className='w-full'></img>

        <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <Card>
            <CardHeader>
            <CardTitle>For Job Seekers</CardTitle>
            </CardHeader>
            <CardContent>
            Search and apply for jobs , track applications , and more.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
            <CardTitle>For Employers</CardTitle>
            </CardHeader>
            <CardContent>
            Post jobs , manage applications and find the best candidate.
            </CardContent>
          </Card>
        </section>
      </main>
    
  )
}

export default LandingPage