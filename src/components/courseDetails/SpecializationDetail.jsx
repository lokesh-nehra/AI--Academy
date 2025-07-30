// import React, { useState } from "react";

// const SpecializationDetail = ({ course }) => {
//   const [openIndex, setOpenIndex] = useState(null);

//   if (!course)
//     return <div className="text-center text-red-600">Course not found.</div>;

//   const toggleAccordion = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-4 space-y-12">
//       {/* Hero Section */}
//       <div className="flex flex-col md:flex-row items-center gap-6">
//         {course.logo && (
//           <img
//             src={course.logo}
//             alt={course.title}
//             className="w-40 h-40 object-contain"
//           />
//         )}
//         <div>
//           <nav className="text-sm text-gray-600 mb-2">
//             All Courses &gt; Specializations &gt; {course.title}
//           </nav>
//           <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
//           {course.partner && <p className="text-gray-700 mb-2">{course.partner}</p>}
//           <p className="text-gray-700 mb-2">Instructor: {course.instructor}</p>
//           <div className="flex gap-2 mb-4">
//             <span className="border px-2 py-1 rounded text-sm">{course.type}</span>
//             <span className="border px-2 py-1 rounded text-sm">{course.level}</span>
//             <span className="border px-2 py-1 rounded text-sm">{course.duration}</span>
//           </div>
//           <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
//             Enroll for Free
//           </button>
//         </div>
//       </div>

//       {/* Intro Video */}
//       {course.videoUrl && (
//         <div className="w-full aspect-video">
//           <iframe
//             className="w-full h-full rounded-md"
//             src={course.videoUrl}
//             title="Course Intro Video"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>
//         </div>
//       )}

//       {/* What You'll Learn */}
//       {course.whatYouWillLearn && course.whatYouWillLearn.length > 0 && (
//         <div>
//           <h2 className="text-2xl font-semibold mb-4">What you'll learn</h2>
//           <ul className="list-disc list-inside space-y-1 text-gray-700">
//             {course.whatYouWillLearn.map((point, i) => (
//               <li key={i}>{point}</li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* About This Specialization */}
//       {course.a  && (
//         <div>
//           <h2 className="text-2xl font-semibold mb-4">About this Specialization</h2>
//           <p className="text-gray-700 mb-4">{course.aboutCourse}</p>
//         </div>
//       )}

//       {/* Course Outline */}
//       {course.courseOutline && course.courseOutline.length > 0 && (
//         <div>
//           <h2 className="text-2xl font-semibold mb-4">Course Outline</h2>
//           <div className="grid md:grid-cols-2 gap-4">
//             {course.courseOutline.map((sub, i) => (
//               <div key={i} className="border p-4 rounded-lg">
//                 <h3 className="font-semibold text-lg mb-1">{sub.title}</h3>
//                 <p className="text-sm text-gray-600">{sub.description}</p>
//                 {sub.videoUrl && <p className="text-sm text-gray-600">Video: {sub.videoUrl}</p>}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Skills You'll Gain */}
//       {course.skills && course.skills.length > 0 && (
//         <div>
//           <h2 className="text-2xl font-semibold mb-4">Skills You'll Gain</h2>
//           <div className="flex flex-wrap gap-2">
//             {course.skills.map((skill, i) => (
//               <span key={i} className="bg-gray-200 text-sm px-3 py-1 rounded-full">
//                 {skill}
//               </span>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Instructor Section */}
//       <div>
//         <h2 className="text-2xl font-semibold mb-4">Meet the Instructor</h2>
//         <div className="flex items-center gap-4">
//           {course.instructorImage && (
//             <img
//               src={course.instructorImage}
//               alt={course.instructor}
//               className="w-16 h-16 rounded-full object-cover"
//             />
//           )}
//           <div>
//             <p className="font-semibold">{course.instructor}</p>
//             {course.instructorTitle && <p className="text-sm text-gray-600">{course.instructorTitle}</p>}
//           </div>
//         </div>
//       </div>

//       {/* FAQ Section */}
//       {course.faqs && course.faqs.length > 0 && (
//         <div>
//           <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
//           <div className="space-y-4">
//             {course.faqs.map((faq, i) => (
//               <div key={i} className="border rounded">
//                 <button
//                   onClick={() => toggleAccordion(i)}
//                   className="w-full text-left px-4 py-3 font-medium text-gray-800 bg-gray-100 hover:bg-gray-200"
//                 >
//                   {faq.question}
//                 </button>
//                 {openIndex === i && (
//                   <div className="px-4 py-3 text-gray-700 border-t">
//                     {faq.answer}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SpecializationDetail;






import React, { useState } from "react";
import { Play, Clock, Users, Award, ChevronDown, ChevronUp, Star, CheckCircle, Globe, Calendar, BookOpen } from "lucide-react";

// Hero Section Component
const Hero = ({ course }) => (
  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-3 gap-12">
        {/* Left Content */}
        <div className="lg:col-span-2">
          {/* Partner/Logo Section */}
          <div className="flex items-center gap-4 mb-6">
            {course.logo && (
              <img src={course.logo} alt={course.partner || "Partner"} className="h-10 w-auto" />
            )}
            <span className="text-lg font-semibold text-blue-700">
              {course.partner || "DeepLearning.AI"}
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {course.title}
          </h1>
          
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            {course.about || course.description}
          </p>
          
          {/* Course Stats */}
          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Award className="h-5 w-5 text-blue-600" />
              <span className="font-medium">{course.type}</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Users className="h-5 w-5 text-green-600" />
              <span className="font-medium">{course.level || "Intermediate"}</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Clock className="h-5 w-5 text-orange-600" />
              <span className="font-medium">{course.duration || "3-4 months"}</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Enroll for Free
            </button>
            <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300">
              Try for Free
            </button>
          </div>
          
          <p className="text-sm text-gray-600 flex items-center gap-2">
            <Globe className="h-4 w-4" />
            Financial aid available • <span className="text-blue-600 hover:underline cursor-pointer">Learn more</span>
          </p>
        </div>
        
        {/* Right Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xl sticky top-6">
            <h3 className="font-bold text-xl mb-6 text-gray-900">Specialization Details</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">Earn a career certificate</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">Put this credential on your LinkedIn profile, resume, or CV</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">Share it on social media and in your performance review</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">Hands-on projects using real-world scenarios</span>
              </div>
            </div>
            
            <div className="pt-6 border-t border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <span className="font-semibold">4.7</span>
                <span className="text-gray-600 text-sm">(3,247 reviews)</span>
              </div>
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <Users className="h-4 w-4" />
                45,621 already enrolled
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Video Section Component
const VideoSection = ({ videoUrl, title }) => {
  if (!videoUrl) return null;
  
  return (
    <div className="bg-gray-900 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Course Preview</h2>
        <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            src={videoUrl}
            title={`${title} Preview`}
            className="w-full h-full"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

// What You'll Learn Component
const WhatYouWillLearn = ({ whatYouWillLearn = [] }) => {
  if (!whatYouWillLearn.length) return null;

  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">What You'll Learn</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {whatYouWillLearn.map((item, index) => (
            <div key={index} className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl border border-blue-100 hover:bg-blue-100 transition-colors duration-300">
              <div className="w-3 h-3 bg-blue-600 rounded-full mt-1 flex-shrink-0"></div>
              <p className="text-gray-800 leading-relaxed font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Learning Outcomes Component  
const Outcomes = ({ outcomes = [] }) => {
  if (!outcomes.length) return null;

  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Learning Outcomes</h2>
        <div className="grid gap-6">
          {outcomes.map((outcome, index) => (
            <div key={index} className="flex items-start gap-4 p-6 border-l-4 border-green-500 bg-white rounded-r-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
              <p className="text-gray-800 leading-relaxed text-lg">{outcome}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// About Section Component
const About = ({ aboutCourse, title }) => {
  if (!aboutCourse) return null;

  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">About this Specialization</h2>
        <div className="prose prose-xl max-w-none">
          <div className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
            {aboutCourse}
          </div>
        </div>
      </div>
    </div>
  );
};

// Course Outline Component
const CourseOutline = ({ courseOutline = [] }) => {
  if (!courseOutline.length) return null;

  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Course Outline</h2>
        <div className="space-y-6">
          {courseOutline.map((course, index) => (
            <div key={index} className="border border-gray-200 rounded-xl p-8 bg-white hover:shadow-lg transition-all duration-300 group">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </h3>
                </div>
                <div className="flex items-center gap-4">
                  {course.duration && (
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {course.duration}
                    </span>
                  )}
                  {course.hasCode && (
                    <span className="text-sm text-green-600 bg-green-100 px-3 py-1 rounded-full">
                      Code included
                    </span>
                  )}
                </div>
              </div>
              {course.description && (
                <p className="text-gray-700 leading-relaxed ml-14">{course.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Skills Component
const Skills = ({ skills = [] }) => {
  if (!skills.length) return null;

  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Skills You'll Gain</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-6 py-3 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 rounded-full font-semibold hover:from-blue-200 hover:to-blue-300 transition-all duration-300 border border-blue-300 shadow-sm hover:shadow-md cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Instructor Component
const Instructor = ({ course }) => {
  if (!course.instructor) return null;

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Meet Your Instructor</h2>
        <div className="flex flex-col md:flex-row items-start gap-8 p-8 bg-white rounded-2xl shadow-xl">
          <div className="w-32 h-32 bg-gray-300 rounded-2xl overflow-hidden flex-shrink-0">
            {course.instructorImage ? (
              <img src={course.instructorImage} alt={course.instructor} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-2xl font-bold">
                {course.instructor.charAt(0)}
              </div>
            )}
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{course.instructor}</h3>
            <p className="text-blue-600 font-semibold mb-4">{course.instructorTitle || "Expert Instructor"}</p>
            <p className="text-gray-700 leading-relaxed text-lg">
              An experienced professional with deep expertise in the field, bringing real-world insights and practical knowledge to help you master the concepts and skills needed for success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// FAQ Component
const Faq = ({ faqs = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  if (!faqs.length) return null;

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <button
                className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors duration-300"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="h-6 w-6 text-blue-600" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-gray-500" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 border-t border-gray-100 bg-gray-50">
                  <p className="text-gray-700 leading-relaxed pt-4">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Specialization Component
const SpecializationDetail = ({ course }) => {
  if (!course) {
    return <div className="min-h-screen flex items-center justify-center">Course not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Hero course={course} />

      {/* Video Section */}
      <VideoSection videoUrl={course.videoUrl} title={course.title} />

      {/* What You'll Learn */}
      <WhatYouWillLearn whatYouWillLearn={course.whatYouWillLearn} />

      {/* Learning Outcomes */}
      <Outcomes outcomes={course.outcomes} />

      {/* About this Specialization */}
      <About aboutCourse={course.aboutCourse} title={course.title} />

      {/* Course Outline */}
      <CourseOutline courseOutline={course.courseOutline} />

      {/* Skills You'll Gain */}
      <Skills skills={course.skills} />

      {/* Instructor Section */}
      <Instructor course={course} />

      {/* FAQ Section */}
      <Faq faqs={course.faqs} />

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join thousands of learners who have advanced their careers with this comprehensive specialization. Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
              Enroll Now - Free to Try
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecializationDetail;