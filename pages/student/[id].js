import Image from 'next/image';
import { useRouter } from 'next/router';

export default function StudentDetailsPage() {
  
  // const student = {
  //   id: '123',
  //   firstName: 'John',
  //   email: 'john@example.com',
  //   degreeBranch: 'Computer Science',
  //   yoPassing: '2022',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.What is a paragraph? Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph.',
  //   foto: '',
  // };
  const StudentDetailsPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [student, setStudent] = useState(null);
  
    useEffect(() => {
      // Fetch student data using 'id'
      fetch(`/api/getStudent/${id}`) 
        .then((response) => response.json())
        .then((data) => setStudent(data));
    }, [id]);
  
    
    if (!student) {
      return <div>Loading...</div>;
    }

  return (
    <div className="max-w-800 mx-auto px-4">
      <div className="text-center mb-4">
        {/* <Image
          className="w-40 h-40 rounded-full mx-auto shadow-lg mb-2"
          src={student.foto}
          alt={`${student.firstName}'s Photo`}
          width={160}
          height={160}
        /> */}
        <h1 className="text-3xl font-bold">Student Details</h1>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-xl">
            <span className="font-semibold">ID:</span> {student.id}
          </p>
          <p className="text-xl">
            <span className="font-semibold">First Name:</span> {student.fullName}
          </p>
          <p className="text-xl">
            <span className="font-semibold">Email:</span> {student.email}
          </p>
          <p className="text-xl">
            <span className="font-semibold">Degree Branch:</span> {student.degreeBranch}
          </p>
          <p className="text-xl">
            <span className="font-semibold">Year of Passing:</span> {student.yoPassing}
          </p>
        </div>
        <div>
          <p className="text-xl">
            <span className="font-semibold">Description:</span> {student.description}
          </p>
        </div>
      </div>
    </div>
  );
}
}
