import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
// const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey);

// export const handleSubmit = async (event, name, email, message, setResponse, setName, setEmail, setMessage) => {
//     event.preventDefault();

//     const { data, error } = await supabase
//         .from('comment')
//         .insert([{ name, email, comment: message }])
//         .select()

//         if (error) {
//             setResponse('Error submitting comment');
//             console.log('error')
//         }
//         else {
//             setName('');
//             setEmail('');
//             setMessage('');
//             setResponse('I am still working on this feature. Your comment will be saved for later.');
//         }

// }

