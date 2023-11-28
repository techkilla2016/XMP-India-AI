"use client"
import Loader from '@/components/Loader'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useCookies } from 'react-cookie'

const Page = () => {
  const [isLoad, setIsLoad] = useState(true)
  const [cookies] = useCookies(['auth'])
  const router = useRouter()
  useEffect(() => {
    if (!cookies?.auth) {
      router.push('/login')
    } else {
      setIsLoad(false)
    }
  }, [cookies])

  const data = [
    {
      img: '/assets/Rani-LaxmiBai.png', //new
    },
    {
      img: '/assets/3.png',
    },
    {
      img: '/assets/9.png',
    },
    {
      img: '/assets/10.png',
    },
    {
      img: '/assets/1.png',
    },
    {
      img: '/assets/12.png', // new
    },

    {
      img: '/assets/5.png',
    },

    {
      img: '/assets/Maharana-Pratap.png',
    },

    {
      img: '/assets/6.png',
    },
    {
      img: '/assets/Shivaji.png',
    },
    {
      img: '/assets/8.png',
    },
    {
      img: '/assets/Prithviraj.png',
    },

    {
      img: '/assets/Bajirao.png',
    },
    {
      img: '/assets/4.png',
    },


    // {
    //   img: '/assets/2.png',
    // },

    {
      img: '/assets/11.png',
    },
    {
      img: '/assets/7.png',
    },

  ]

  let list = [
    ''
  ]

  return (
    <div className="main">

      {
        isLoad ? <Loader /> : <Container>
          <Row className='py-5'>
            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
              <span className='xmpheading'>XMP India AI Photobooth</span>
              {/* <img src="/assets/logo.png" alt="" /> */}
            </Col>
          </Row>

          <Row>
            {
              data?.map((item, keys) => {
                return <Col xxl={3} xl={3} lg={3} md={3} sm={6} xs={12} key={keys} className='py-4'>
                  <Card>
                    <img src={item?.img} alt="" />
                  </Card>
                </Col>
              })
            }
          </Row>
          <div className="d-flex justify-content-center py-4">
            <Link href='/start' className='btn btn-success start-btn'>Start Now</Link>
          </div>
        </Container >
      }
    </div >
  )
}

export default Page