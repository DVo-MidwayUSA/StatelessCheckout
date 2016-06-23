using Microsoft.AspNet.Identity.EntityFramework;

namespace StatelessCheckout.Api
{
    public class AuthContext : IdentityDbContext<IdentityUser>
    {
        public AuthContext() : base("AuthContext")
        {
        }
    }
}