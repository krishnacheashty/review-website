
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import logo from '../../image/dance-school.jpg'
import Footer from '../Footer/Footer';
import ManuBar from '../manuBar/ManuBar';

const Blog = () => {
    return (
        <div className='m-5'>
            <ManuBar/>
             <h1 className='m-5'>BLOG SECTION</h1>
             <Card className='text-center' style={{ width: '50rem',margin:"20px" }}>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                    <Card.Title>2020 Best Schools for Music in Bangladesh</Card.Title>
                    <Card.Text>
                    Brooklyn Melodies Music Center opened its first branch in 2007. We planted a small seed which flourished into a beautiful garden. It is the best music school in Dubai and also providing individual and group courses in music and dance classes in Bangladesh.

                        Since then, we have been the leading Music School in Dubai, with the largest number of branches conveniently located across all key areas of Dubai, and the largest number of students presented in the ABRSM (Associated Board of the Royal Schools of Music) and RSL Rock school International Exams.

                        We are pleased and happy to have inspired and contributed to many people’s lives. We have put lots of effort and passion through the years to provide the highest quality of Music, Ballet and Dance – Individual and Group courses; for all ages, starting from little children to adults; and for all levels, from complete beginners to advance.

                        As Hans Christian Andersen once said “Where Words Fail, Music Speaks”

                        At Brooklyn Melodies Music Center, we are happy to give our students the opportunity to find their unique way to express themselves, choosing between Piano, Guitar, Violin, Vocal, Drums, Ukulele, Cello, Flute, Clarinet, Saxophone, including Music Theory; Children’s Music Classes; Classical Ballet, Contemporary Ballet, Jazz Dance and Hip Hop Classes.
                    </Card.Text>
                    <Button variant="primary">Details</Button>
                </Card.Body>
                </Card>
            <Footer/>
                
        </div>
    );
    
};

export default Blog;