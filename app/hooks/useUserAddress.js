const useUserAddress = async () => {
  let address = {};
  let response = await fetch("/api/address/get");

  if (response) {
    let data = await response.json();
    if (data) address = data;
  }

  return address;
};

export default useUserAddress;

//   const supabase = createClientComponentClient();
//     const router = useRouter();
//     const [loggedInUser, setLoggedInUser] = useState(null);
//     const [username, setUsername] = useState("");
//     const [avatar, setAvatar] = useState("");
// useEffect(() => {
//   const checkLoginStatus = async () => {
//     try {
//       const currentUser = await supabase.auth.getSession();
//       console.log(currentUser);
//       if (currentUser) {
//         setUsername(currentUser.data.session.user.user_metadata.username);
//         setAvatar(currentUser.data.session.user.user_metadata.avatar_url);
//         setLoggedInUser(currentUser);
//       }
//     } catch (error) {
//       console.error("Error fetching login status:", error);
//     }
//   };

//   checkLoginStatus();
// }, []);
