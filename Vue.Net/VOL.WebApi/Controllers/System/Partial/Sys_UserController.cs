
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using VOL.Core.Controllers.Basic;
using VOL.Core.Filters;
using VOL.Entity.AttributeManager;
using VOL.Entity.DomainModels;
using VOL.System.IServices;

namespace VOL.System.Controllers
{
    [Route("api/User")]
    public partial class Sys_UserController 
    {
        [HttpPost, Route("login"), AllowAnonymous]
        public async Task<IActionResult> Login([FromBody]LoginInfo loginInfo)
        {
            return Json(await Service.Login(loginInfo));
        }

        [HttpPost, Route("replaceToken"), AllowAnonymous]
        public async Task<IActionResult> ReplaceToken()
        {
            return Json(await Service.ReplaceToken());
        }

        [HttpPost, Route("modifyPwd")]
        [ApiActionPermission]
        public async Task<IActionResult> ModifyPwd(string oldPwd, string newPwd)
        {
            return Json(await Service.ModifyPwd(oldPwd, newPwd));
        }

        [HttpPost, Route("getCurrentUserInfo")]
        public async Task<IActionResult> GetCurrentUserInfo()
        {
            return Json(await Service.GetCurrentUserInfo());
        }

        [HttpPost, Route("loginCode"), AllowAnonymous]
        public async Task<IActionResult> LoginCode(string code)
        {
            return Json(await Service.Login(code));
        }

        [HttpPost, Route("loginOpenId"), AllowAnonymous]
        public async Task<IActionResult> LoginOpenId(string openid)
        {
            return Json(await Service.LoginOpenId(openid));
        }

        [HttpPost, Route("register"), AllowAnonymous]
        public async Task<IActionResult> Register(string code, string encryptedData, string iv, string signature)
        {
            return Json(await Service.Register(code, encryptedData, iv, signature));
        }

        [HttpPost, Route("registerUser"), AllowAnonymous]
        public async Task<IActionResult> RegisterUser(string openid, string nickName, string avatarUrl, int gender)
        {
            return Json(await Service.RegisterUser(openid, nickName, avatarUrl, gender));
        }

        [HttpPost, Route("checkToken"), AllowAnonymous]
        public async Task<IActionResult> CheckToken(string token)
        {
            return Json(await Service.CheckToken(token));
        }
    }
}
