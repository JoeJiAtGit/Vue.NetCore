using VOL.Core.BaseProvider;
using VOL.Core.Utilities;
using VOL.Entity.DomainModels;
using System.Threading.Tasks;

namespace VOL.System.IServices
{
    public partial interface ISys_UserService
    {

        Task<WebResponseContent> Login(LoginInfo loginInfo, bool verificationCode = true);
        Task<WebResponseContent> ReplaceToken();
        Task<WebResponseContent> ModifyPwd(string oldPwd, string newPwd);
        Task<WebResponseContent> GetCurrentUserInfo();

        Task<WebResponseContent> Login(string code);

        Task<WebResponseContent> LoginOpenId(string openid);

        Task<WebResponseContent> Register(string code, string encryptedData, string iv, string signature);

        Task<WebResponseContent> RegisterUser(string openid, string nickName, string avatarUrl, int gender);

        Task<WebResponseContent> CheckToken(string token);
    }
}

